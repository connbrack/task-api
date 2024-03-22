import { Controller, Get, Post, Body, Put, Delete  } from '@nestjs/common';
import { AppService } from './app.service';
import { Tasks } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tasks')
  allTasks(): Promise<Tasks[]> {
    return this.appService.allTasks();
  }

  @Post('addtask')
  addTask(@Body() newtask:JSON): any {
    return this.appService.addTask(newtask);
  }
}
