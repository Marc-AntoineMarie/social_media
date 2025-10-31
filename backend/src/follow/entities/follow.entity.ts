import { Follow } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class FollowEntity implements Follow {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    followerId: number;

    @ApiProperty()
    followingId: number;
}
