import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskDTO } from 'src/dtos';
import { TaskService } from './task.service';
import { resolve } from 'path';
import { rejects } from 'assert';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return new Promise((resolve, rejects) => {
      setTimeout(() => rejects('Somethin wa wrom!'), 15000);
    });
    //return this.taskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
