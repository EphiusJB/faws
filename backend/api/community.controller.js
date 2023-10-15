import CommunityDAO from "../dao/communityDAO.js";

export default class CommunityController{
    static async apiGetCommunitys(req, res, next){
        const itemsPerPage = req.query.itemsPerPage ?
        parseInt(req.query.itemsPerPage) : 10
        const page = req.query.page ? parseInt(req.query.page) : 0

        let filters = {}
        if(req.query.region){
            filters.region = req.query.region
        }
        else if(req.query.name){
            filters.name = req.query.name
        }

        const { communityList, totalNumCommunitys } = await CommunityDAO.getCommunitys({filters, page, itemsPerPage})

        let response = {
            communitys: communityList,
            page: page,
            filters: filters,
            entries_per_page: itemsPerPage,
            total_results: totalNumCommunitys,
        }
        res.json(response)
    }
}