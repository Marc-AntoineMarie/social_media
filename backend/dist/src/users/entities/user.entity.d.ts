import { User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    email: string;
    username: string;
    password: string;
    fullName: string;
    bio: string;
    avatar: string;
    website: string;
    isPrivate: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
