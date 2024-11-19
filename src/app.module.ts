import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { Test } from './test/entities/test.entity';
import { ArticlesModule } from './articles/articles.module';

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';

@Module({
  imports: [    
     AuthModule,
     UserModule,
     TestModule,
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'DB_HM_MSR_WEEK2',
      entities: [entitiesPath],
      synchronize: true,

    }),
     ArticlesModule,
 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
