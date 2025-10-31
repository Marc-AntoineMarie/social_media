import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { FollowEntity } from './entities/follow.entity';

@ApiTags('follow')
@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  @ApiCreatedResponse({ type: FollowEntity })
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followService.create(createFollowDto);
  }

  @Get()
  @ApiOkResponse({ type: FollowEntity, isArray: true })
  findAll() {
    return this.followService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FollowEntity })
  findOne(@Param('id') id: string) {
    return this.followService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FollowEntity })
  update(@Param('id') id: string, @Body() updateFollowDto: UpdateFollowDto) {
    return this.followService.update(+id, updateFollowDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FollowEntity })
  remove(@Param('id') id: string) {
    return this.followService.remove(+id);
  }
}
