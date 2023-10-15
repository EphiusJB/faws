import './styling/home.css';
import { pic1jpg, cd, community, wf, pm } from "../images/images";
import Footer from '../components/Footer';

function Image() {
    return(
        <div className="container">
            <img src= {pic1jpg} alt="splash pic" className="splash" />
        </div>
    );
}

function Ghost(){
    return(
        <div className="ghost-img"></div>
    );
}

function Slogan(){
    return(
        <div>
        <h1 className="slogan">We're Here For Your Needs</h1>
        </div>
    );
}

function HeroSection(){
    return(
        <div className="hero">
            <h1>What we offer </h1>
            <div className="sectionz">
                <img src= {cd} alt="crop data img" className="cd-img" />
                <div className="description">
                    <h3>Crop Data</h3>
                    <p>"That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor" </p>
                </div>
            </div>
            <div className="sectionz">
                <div className="description">
                    <h3>Weather Forcast</h3>
                    <p>"That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor" </p>
                </div>
                <img src= {wf} alt="crop data img" className="cd-img" />
            </div>
            <div className="sectionz">
            <img src= {pm} alt="crop data img" className="cd-img" />
                <div className="description">
                    <h3>Price Markets</h3>
                    <p>"That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor" </p>
                </div>
            </div>
            <div className="sectionz">
                <div className="description">
                    <h3>Community</h3>
                    <p>"That is to say the feedback system the application
                         interface or the operating speed model the participant
                          evaluation sample and seems to uniquely change the 
                          paradigm of The Capacity of Continuous Metaphor" </p>
                </div>
            <img src= {community} alt="crop data img" className="cd-img" />
            </div>
        </div>
    );
}

function News(){
    return(
        <div className='News-section'>
        <h1>Get the latest News</h1>
            <div className="news-splash">
                <div className="news tile1">One</div>
                <div className="news tile2">Two</div>
                <div className="news tile3">Three</div>
                <div className="news tile4">Four</div>
                <div className="news tile5">Five</div>
            </div>
        </div>
    );
}


function Home()
{
    return(
        <div className="body">
            <Image />
            <Ghost />
            <Slogan />
            <HeroSection />
            <News />
            <Footer />
        </div>

    );
}

export default Home;