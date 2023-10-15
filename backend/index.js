import app from "./server.js";
import mongodb from 'mongodb'
import dotenv from 'dotenv'

import CommunityDAO from "./dao/communityDAO.js";
import PostDAO from "./dao/postDAO.js";


async function main(){
    dotenv.config();

    const client = new mongodb.MongoClient(process.env.FAWS_DB_URI);
    const port = process.env.PORT || 3001;

    try {
        await client.connect();
        await CommunityDAO.injectDB(client);
        await PostDAO.injectDB(client);

        app.listen(port, ()=> {
            console.log("server running on port " + port)
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);