import { Comment } from "@prisma/client";
export declare class CommentEntity implements Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    authorId: number;
    postId: number;
    parentCommentId: number | null;
}
