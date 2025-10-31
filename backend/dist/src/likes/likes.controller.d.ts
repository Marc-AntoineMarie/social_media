import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateLikeDto: UpdateLikeDto): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__LikeClient<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
