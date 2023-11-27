import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CocktailsController } from './cocktails/cocktails.controller';
import { CocktailsModule } from './cocktails/cocktails.module';
import { CocktailsService } from './cocktails/cocktails.service';

@Module({
  imports: [ConfigModule.forRoot(), CocktailsModule],
  controllers: [AppController, CocktailsController],
  providers: [AppService,CocktailsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
