import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { map, Observable } from 'rxjs';
import { endpointMessages } from './url-messages'; // Importez le fichier contenant les messages

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly loggingService: LoggingService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const now = Date.now();

    const userAgent = request.headers['user-agent'];
    const latitude = request.headers['x-latitude'];
    const longitude = request.headers['x-longitude'];

    
    const endpointMessage = this.getEndpointMessage(request.url);

    console.log(`Incoming request: ${request.method} ${endpointMessage}`);
    console.log(`Request body: ${JSON.stringify(request.body)}`);
    console.log(`User: ${JSON.stringify(request.user)}`);
    console.log(`User-Agent: ${userAgent}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);

    return next.handle().pipe(
      map(async (data) => {
        const processingTime = Date.now() - now;
        console.log(`Response status: ${response.statusCode}`);
        console.log(`Processing time: ${processingTime}ms`);

        response.setHeader('X-Action-Log', `Action: ${request.method}, Processing Time: ${processingTime}ms`);

        return data;
      }),
    );
  }

  // Méthode pour récupérer le message correspondant à l'URL
  private getEndpointMessage(url: string): string {
    // Retirez les paramètres dynamiques pour correspondre aux routes
    const cleanUrl = url.split('?')[0].replace(/\/\d+$/, '/:id');
    return endpointMessages[cleanUrl] || url;
  }
}
