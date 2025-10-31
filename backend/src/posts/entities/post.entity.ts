import { Post } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PostEntity implements Post {
  @ApiProperty()
  id: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty({ required: false, nullable: true })
  caption: string | null;

  @ApiProperty({ required: false, nullable: true })
  location: string | null;

  @ApiProperty()
  isArchived: boolean;

  @ApiProperty()
  commentsEnabled: boolean;

  @ApiProperty()
  likesVisible: boolean;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
