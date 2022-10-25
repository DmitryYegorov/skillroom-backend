import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices/enums';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'AUTH_SERVICE', transport: Transport.KAFKA, options: {
        client: {
          clientId: "auth",
          brokers: ["localhost:9092"]
        },
        consumer: {
          groupId: "auth-consumer",
        },
      } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
