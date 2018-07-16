import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { AutorController } from './autor.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([AutorEntity])],
  providers: [AutorService],
  controllers: [AutorController],
})
export class AutorModule {}
