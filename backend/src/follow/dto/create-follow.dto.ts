import { ApiProperty } from "@nestjs/swagger";

export class CreateFollowDto {
    @ApiProperty()
    followerId: number;
    
    @ApiProperty()
    followingId: number;
}
