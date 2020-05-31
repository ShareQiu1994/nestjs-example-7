import { IsOptional, IsInt, IsBoolean, IsString } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql'; // 定义 graphql的相关 装饰器
import { ApiProperty } from '@nestjs/swagger'; // 定义 swagger相关 装饰器

@ArgsType()
export class PhotoArgs {
  @Field({ nullable: true }) // 可以为空
  @IsOptional() // 可选的
  @IsString({
    // 验证字段类型
    message: 'name字段必须字符串',
  })
  @ApiProperty({
    name: 'name',
  })
  name: string = 'string';

  @Field({ nullable: true })
  @IsOptional()
  @IsString({
    message: 'description字段必须字符串',
  })
  @ApiProperty({
    name: 'description',
  })
  description: string = 'string';

  @Field({ nullable: true })
  @IsOptional()
  @IsString({
    message: 'filename字段必须字符串',
  })
  @ApiProperty({
    name: 'filename',
  })
  filename: string = 'string';

  @Field({ nullable: true })
  @IsOptional()
  @IsInt({
    message: 'views字段必须为数值',
  })
  @ApiProperty({
    name: 'views',
  })
  views: number = 100;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean({
    message: 'isPublished字段必须布尔值',
  })
  @ApiProperty({
    name: 'isPublished',
  })
  isPublished: boolean = true;
}
