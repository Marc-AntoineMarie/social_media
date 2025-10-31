import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty({ required: false })
    fullName?: string;

    @ApiProperty({ required: false })
    bio?: string;

    @ApiProperty({ required: false })
    avatar?: string;

    @ApiProperty({ required: false })
    website?: string;

    @ApiProperty({ required: false, default: false })
    isPrivate?: boolean;

    @ApiProperty({ required: false, default: false })
    isVerified?: boolean;
}