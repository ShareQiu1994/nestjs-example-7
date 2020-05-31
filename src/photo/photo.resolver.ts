import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/jwt.graphql.strategy';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Photo } from './photo.entity';
import { PhotoArgs } from './dto/photo.args';
import { PhotoService } from './photo.service';
import { ParseIntPipe } from '../common/pipetransform/parseint.pipe'; // 管道数据转换 (数据数据转换)

// @UseGuards(GqlAuthGuard) // graphql添加jwt鉴权 调试时建议关闭
@Resolver(of => Photo)
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}

  // 获取所有photo
  @Query(returns => [Photo])
  async photoFindAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  // 根据id获取指定photo
  @Query(returns => Photo)
  async photoFindId(@Args('id') id: number): Promise<Photo> {
    return await this.photoService.findId(id);
  }

  // 新增photo
  @Mutation(returns => Photo)
  async photoAdd(@Args() photoArgs: PhotoArgs): Promise<Photo> {
    return await this.photoService.add(photoArgs);
  }

  // 根据id修改指定photo
  @Mutation(returns => Photo)
  async photoUpdate(
    @Args('id', new ParseIntPipe()) id: number,
    @Args() PhotoArgs: PhotoArgs,
  ): Promise<Photo> {
    return this.photoService.update(id, PhotoArgs);
  }

  // 根据id删除指定photo
  @Mutation(returns => Photo)
  async photoDelete(
    @Args('id', new ParseIntPipe()) id: number,
  ): Promise<Photo> {
    return this.photoService.remove(id);
  }
}
