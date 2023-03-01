import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { blogsProviders } from './blogs.providers';

@Module({
  providers: [BlogsService, ...blogsProviders],
  controllers: [BlogsController],
})
export class BlogsModule {}
