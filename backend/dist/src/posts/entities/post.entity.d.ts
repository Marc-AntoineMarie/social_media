import { Post } from '@prisma/client';
export declare class PostEntity implements Post {
    id: number;
    imageUrl: string;
    caption: string | null;
    location: string | null;
    isArchived: boolean;
    commentsEnabled: boolean;
    likesVisible: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}
