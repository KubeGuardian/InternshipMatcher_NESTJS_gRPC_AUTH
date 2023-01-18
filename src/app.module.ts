import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOSTDB,
      port: 5432,
      database: 'authdb',
      username: 'postgres',
      password: process.env.PASSDB,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,// never true in production!
    }),
    AuthModule, ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
