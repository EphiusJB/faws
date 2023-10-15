import PostDAO from "../dao/postDAO.js";

export default class PostController{
    static async apiGetCommunityPosts(req, res, next){

        let filter = {};
        if(req.query.referenceId){
            filter.referenceId = req.query.referenceId
        }

        const {postList, totalPosts} = await PostDAO.getPosts({filter});

        let response ={
            posts: postList,
            filter: filter,
            results: totalPosts,
        }
        res.json(response);
    }
}