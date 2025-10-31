import { Like } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class LikeEntity implements Like {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    postId: number;
}
