import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        isArchived: boolean;
        commentsEnabled: boolean;
        likesVisible: boolean;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        isArchived: boolean;
        commentsEnabled: boolean;
        likesVisible: boolean;
        authorId: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        isArchived: boolean;
        commentsEnabled: boolean;
        likesVisible: boolean;
        authorId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePostDto: UpdatePostDto): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        isArchived: boolean;
        commentsEnabled: boolean;
        likesVisible: boolean;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        isArchived: boolean;
        commentsEnabled: boolean;
        likesVisible: boolean;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
