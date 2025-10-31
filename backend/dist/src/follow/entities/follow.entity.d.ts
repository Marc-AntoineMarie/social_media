import { Follow } from "@prisma/client";
export declare class FollowEntity implements Follow {
    id: number;
    createdAt: Date;
    followerId: number;
    followingId: number;
}
