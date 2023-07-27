import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class TaskDTO {
  @IsString()
  @IsOptional()
  id: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsBoolean()
  isDone: boolean;
}
