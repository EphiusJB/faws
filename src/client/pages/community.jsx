import './styling/styles.css';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import {user} from '../images/images.jsx'


function Community(){
    return(
        <div className="community">
            <Nav />
            <div className="ghostNav"></div>
            <div className="kontainer">
                <div className="leftbox">
                    <div className="community_options">
                        <div className="opts">Community News</div>
                        <div className="opts">My Communities</div>
                        <div className="opts create">Create</div>
                    </div>

                    <div className="content">
                        <div className="post">
                            <div className="author_details">
                                <div className="user_details">
                                    <img src={user} alt="profile" className="pic" />
                                    <div className="user_name">john doe</div>
                                </div>

                                <div className="communityName">east cultivators</div>
                            </div>

                            <hr></hr>

                            <p className="postText">That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor</p>

                            <hr></hr>
                            <div className="likcom">
                                <div className="comment"></div>
                                <div className="like"></div>
                            </div>
                        </div>
                        
                        <div className="post">
                            <div className="author_details">
                                <div className="user_details">
                                    <img src={user} alt="profile" className="pic" />
                                    <div className="user_name">john doe</div>
                                </div>

                                <div className="communityName">east cultivators</div>
                            </div>

                            <hr></hr>

                            <p className="postText">That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor</p>

                            <hr></hr>
                            <div className="likcom">
                                <div className="comment"></div>
                                <div className="like"></div>
                            </div>
                        </div>

                        <div className="post">
                            <div className="author_details">
                                <div className="user_details">
                                    <img src={user} alt="profile" className="pic" />
                                    <div className="user_name">john doe</div>
                                </div>

                                <div className="communityName">east cultivators</div>
                            </div>

                            <hr></hr>

                            <p className="postText">That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor</p>

                            <hr></hr>
                            <div className="likcom">
                                <div className="comment"></div>
                                <div className="like"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightbox">
                    
                    <form action="" method="post" className='searchBar'>
                        <input type="text" placeholder='Search Community' className='searchfield'/>
                        <input type="submit" value="" className='searchbtn'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Community;