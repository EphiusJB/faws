let post

export default class PostDAO{
    static async injectDB(conn){
        if(post){
            return
        }
        try {
            post = await conn.db(process.env.FAWS_NS).collection("posts");
        } catch (e) {
            console.error(`unable to connect to collection in PostDAO: ${e}`);
        }
    }

    static async getPosts({
        filter = null,
    } = {}){
        let query
        query = {"referenceId": {$eq: filter['referenceId']}}
           

        let cursor
        try {
            cursor = await post.find(query);
            const postList = await cursor.toArray();
            const totalPosts = await post.countDocuments(query);
    
            return {postList, totalPosts};
        } catch (e) {
            console.error(`unable to connect in PostDAO: ${e}`);
            return {postList: [], totalPosts: 0}
        }
    }
}