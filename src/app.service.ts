import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
    return 'Welcome to the tasks API!';
  }

  async allTasks(): Promise<Tasks[]> {
    const tasks = await this.tasksRepository.find();
    if (tasks.length === 0) {
      throw new NotFoundException('No entries found');
    } else {
      return tasks;
    }
  }


  async addTask(body): Promise<{message: string}> {
    if (body.hasOwnProperty('newtask')) {
      const task = body["newtask"];
      const newTask = this.tasksRepository.create({ completed: false, task: task, priority: 1 });
      await this.tasksRepository.save(newTask);
      return { message: 'task was added' }
    } else {
      throw new BadRequestException('Invalid json format');
    }
  }


  async updateTask(body): Promise<any> {
    const id = body["id"];
    const task = await this.tasksRepository.findOne({ where: { id: id } });
    if (!task) {
      throw new NotFoundException(`No task ${id} found`);
    } else {
      await this.tasksRepository.update(id, body);
      return { message: `task ${id} was updated` }
    }
  }


  async deleteTask(body): Promise<any> {
    const id = body["id"];
    const task = await this.tasksRepository.findOne({ where: { id: id } });
    if (!task) {
      throw new NotFoundException(`No task ${id} found`);
    } else {
      await this.tasksRepository.delete(id);
      return { message: `task ${id} was deleted` }
    }
  }
}
