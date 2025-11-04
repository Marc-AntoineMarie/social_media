import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        content: string;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        content: string;
        postId: number;
        parentCommentId: number | null;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        content: string;
        postId: number;
        parentCommentId: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateCommentDto: UpdateCommentDto): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        content: string;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
        content: string;
        postId: number;
        parentCommentId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
