import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { CoreModule } from './core/core.module';
// import { ResourcesModule } from './resources/resources.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule { }
