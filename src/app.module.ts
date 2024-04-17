import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './application/common/database/database.module';
import { UserModule } from './presentation/user/user.module';
import { envSchema } from './application/common/env/env';
import { EnvModule } from './application/common/env/env.module';

@Module({
  imports: [ConfigModule.forRoot({
    validate: (env) => envSchema.parse(env),
    isGlobal: true
  }),
    DatabaseModule,
    UserModule,
    EnvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
