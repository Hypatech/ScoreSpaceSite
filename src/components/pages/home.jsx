import React from 'react';
import Background from '../../assets/space_background.png';
import Controller from '../../assets/controller.png';
import PC from '../../assets/pc.png';
import { TopbarMargin, BaseMargin } from '../Topbar';
import TypedHeading, {FadeBody} from '../TypedHeading';
import Jumbotron from '../Jumbotron';
import Button from '../Button';
import QuoteBox from '../QuoteBox';
import Footer from '../Footer';
    
function Home(props){
    return(
        <div>  
            <section className="Banner" style={{background:`url(${Background})`, height: "auto", position: "relative", backgroundSize: "100%", backgroundPositionY: "-10%"}}>
                <TopbarMargin/>
                <Jumbotron style={{height: "auto"}}>
                    <h2>A two-sided competition made for game developers and streamers.</h2>
                    <p>
                    ScoreSpace aims to create a platform that connects gamedevs and streamers to create a community of creators helping each other grow. It is the only gamejam that involves streamers after the games are made. 
                    </p>

                    <span>
                    <Button onClick={() => window.open("https://invite.gg/scorespace")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#2C2F33", margin: 20, marginBottom: 0, borderRadius: 10, fontSize: 20}}>
                        <b>Join our Discord</b>
                    </Button>

                    <Button onClick={() => window.open("https://itch.io/jam/polyspace1")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#00C0FF", margin: 20, borderRadius: 10, fontSize: 20}}>
                        <b>Most Recent Jam</b>
                    </Button>
                    </span>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xo6VWiJkOIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <BaseMargin/>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: `#16263A`}}>
                    <BaseMargin/>
                    <div className={"icon"}>
                        <img src={PC} width={100}/>
                    </div>
                    <h2>
                        Developers
                    </h2>
                    <p style={{lineHeight: 1.5}}>
                    The jam starts with the game developers. Their job is to create a game within a 72 hour period. Once the time is up, there is a three day judging period in which the games are judged by the jam participants. The winning games are made a highlight video. The top three games are then played by the streamers.
                    </p>

                    <TopbarMargin/>
                    <div className={"icon"}>
                        <img src={Controller} width={100}/>
                    </div>
                    <h2>
                        Streamers
                    </h2>
                    <p style={{lineHeight: 1.5}}>
                    When the video is uploaded is also when the 48 hour timer starts for the streamers. The goal for the streamers is to get a highscore in one of the three games. Once the timer runs out the streamers submit their VOD and the player who achieves the highest score in each game wins. 
                    </p>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: `white`}} pStyle={{color: `black`}}>
                    <QuoteBox/>
                </Jumbotron>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;