import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCommentDto: CreateCommentDto): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: number;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: number;
        postId: number;
        parentCommentId: number | null;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: number;
        postId: number;
        parentCommentId: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateCommentDto: UpdateCommentDto): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: number;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: number;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
