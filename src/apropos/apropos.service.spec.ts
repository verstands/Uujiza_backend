import { Test, TestingModule } from '@nestjs/testing';
import { AproposService } from './apropos.service';

describe('AproposService', () => {
  let service: AproposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AproposService],
    }).compile();

    service = module.get<AproposService>(AproposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
