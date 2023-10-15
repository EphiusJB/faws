let community

export default class CommunityDAO{
    static async injectDB(conn){
        if(community){
            return
        }
        try {
            community = await conn.db(process.env.FAWS_NS).collection("communitys");
        } catch (e) {
            console.error(`unable to connect in CommunityDAO: ${e}`);
        }
    }

    static async getCommunitys({
        filters = null,
        page = 0,
        itemsPerPage = 10,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text: { $search: filters['name']}}
            } else if("region" in filters){
                query = {"region": { $eq: filters['region']}}
            }
        }
        let cursor
        try {
            cursor = await community.find(query).limit(itemsPerPage).skip(itemsPerPage*page)

            const communityList = await cursor.toArray()
            const totalNumCommunitys = await community.countDocuments(query)

            return {communityList, totalNumCommunitys}
        } catch (e) {
            console.error(`unable to connect in CommunityDAO: ${e}`);
            return {communtiyList: [], totalNumCommunitys: 0}
        }
    }
};