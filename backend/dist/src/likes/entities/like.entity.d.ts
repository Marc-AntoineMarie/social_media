import { Like } from "@prisma/client";
export declare class LikeEntity implements Like {
    id: number;
    createdAt: Date;
    userId: number;
    postId: number;
}
