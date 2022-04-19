import express from "express";
import { CreatePost, GetPosts, UpdatePost, DeletePost, LikePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", GetPosts);
router.post("/", CreatePost);
router.patch('/:id', UpdatePost)
router.delete('/:id', DeletePost)
router.patch('/:id/likePost', LikePost)

export default router;