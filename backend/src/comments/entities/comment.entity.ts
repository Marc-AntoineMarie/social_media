import { Comment } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CommentEntity implements Comment {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    content: string;

    @ApiProperty()
    authorId: number;

    @ApiProperty()
    postId: number;

    @ApiProperty({ required: false })
    parentCommentId: number | null;
}