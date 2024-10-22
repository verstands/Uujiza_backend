import { Controller  } from '@nestjs/common';
import { LoggingService } from './logging.service';

@Controller('logging')
export class LoggingController {
  constructor(private readonly roleservice: LoggingService) {}

}
