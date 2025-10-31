import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class LikesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLikeDto: CreateLikeDto): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateLikeDto: UpdateLikeDto): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
