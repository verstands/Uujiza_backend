import { Test, TestingModule } from '@nestjs/testing';
import { AproposController } from './apropos.controller';

describe('AproposController', () => {
  let controller: AproposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AproposController],
    }).compile();

    controller = module.get<AproposController>(AproposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
