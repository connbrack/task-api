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
  addTask(@Body() body: { newtask: string }): Promise<{message: string}> {
    return this.appService.addTask(body);
  }

  @Put('updatetask')
  updateTask(@Body() taskupdate:JSON): any {
    return this.appService.updateTask(taskupdate);
  }

  @Delete('deletetask')
  deleteTask(@Body() taskupdate:JSON): any {
    return this.appService.deleteTask(taskupdate);
  }
}
