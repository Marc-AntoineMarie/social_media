import { User } from '@prisma/client';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  username: string;

  @ApiHideProperty()
  password: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  isPrivate: boolean;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
