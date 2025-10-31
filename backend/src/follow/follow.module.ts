import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowController } from './follow.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FollowController],
  providers: [FollowService],
  imports: [PrismaModule],
})
export class FollowModule {}
