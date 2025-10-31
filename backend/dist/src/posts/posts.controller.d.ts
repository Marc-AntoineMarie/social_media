import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        authorId: number;
        commentsEnabled: boolean;
        likesVisible: boolean;
        isArchived: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        authorId: number;
        commentsEnabled: boolean;
        likesVisible: boolean;
        isArchived: boolean;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        authorId: number;
        commentsEnabled: boolean;
        likesVisible: boolean;
        isArchived: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePostDto: UpdatePostDto): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        authorId: number;
        commentsEnabled: boolean;
        likesVisible: boolean;
        isArchived: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        caption: string | null;
        location: string | null;
        authorId: number;
        commentsEnabled: boolean;
        likesVisible: boolean;
        isArchived: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
