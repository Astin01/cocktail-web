import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews } from './entities/Reviews.entity';
import { UsersModule } from './users/users.module';
import { Users } from './entities/Users.entity';
import { Cocktail } from './entities/cocktail.entity';
import { CocktailController } from './cocktail/cocktail.controller';
import { CocktailService } from './cocktail/cocktail.service';
import { CocktailModule } from './cocktail/cocktail.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CocktailModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Users, Reviews, Cocktail],
      keepConnectionAlive: true,
      synchronize: false,
      logging: true,
      charset: 'utf8mb4_general_ci',
    }),
    TypeOrmModule.forFeature([Users, Cocktail, Reviews]),
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
