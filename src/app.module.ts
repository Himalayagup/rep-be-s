import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { BlogsModule } from './modules/blogs/blogs.module';

@Module({
  imports: [
        DatabaseModule,
        ConfigModule.forRoot({ isGlobal: true }),
        UsersModule,
        AuthModule,
        BlogsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
