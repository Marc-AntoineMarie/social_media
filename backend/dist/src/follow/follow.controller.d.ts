import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    create(createFollowDto: CreateFollowDto): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateFollowDto: UpdateFollowDto): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
