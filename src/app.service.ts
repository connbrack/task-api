import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async allTasks(): Promise<Tasks[]> {
    const tasks = await this.tasksRepository.find();
    if (tasks.length === 0) {
      throw new NotFoundException('No entries found');
    } else {
    return tasks;
    }
  }


  async addTask(body): Promise<any> {
    const task = body["newtask"];
    const newTask = this.tasksRepository.create({ completed: false, task: task, priority: 1 });
    await this.tasksRepository.save(newTask);
    return { message: 'task was added'}
  }
}
