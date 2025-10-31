import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  postId: number;

  @ApiProperty({ required: false })
  parentCommentId?: number;
}

