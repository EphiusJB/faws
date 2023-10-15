import express from "express";
import CommunityController from "./community.controller.js";
import PostController from "./post.controller.js";

const router = express.Router();

router.route("/community").get(CommunityController.apiGetCommunitys);
router.route("/community/posts").get(PostController.apiGetCommunityPosts);

export default router;