import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class FollowService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateFollowDto: UpdateFollowDto): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__FollowClient<{
        id: number;
        createdAt: Date;
        followerId: number;
        followingId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
