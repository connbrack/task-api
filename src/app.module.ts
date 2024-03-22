import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateSQL } from './app.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/mydb.sqlite',
      entities: [TemplateSQL],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TemplateSQL]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
