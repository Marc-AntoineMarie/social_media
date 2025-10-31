import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  imageUrl: string;

  @ApiProperty({ required: false })
  caption?: string;

  @ApiProperty({ required: false })
  location?: string;

  @ApiProperty()
  authorId: number;

  @ApiProperty({ required: false, default: true })
  commentsEnabled?: boolean;

  @ApiProperty({ required: false, default: true })
  likesVisible?: boolean;
}
