import './About.css';
import vlodmeronplane from '../../utils/vlodmeronplane.png';
function About() {
    return (
        <div className='about__div'>
            <div className="about__block">
                <h2>About</h2>
                <p>Vlodmer Smerks is teh brane behin all the hype CMO of Bloom n da KING of moon missions.</p>
                <p>His jeb? To mek bellions of tokens fly to da moon. Our jeb? To mek bellions of memes bout him n hodl like legends.</p>
                <p>He s foighting aginst FUD, rug pulls, n probly SEC (lol). Now we foight for him, coz Vlodmer nevr losz!</p>
            </div>
            <img src={vlodmeronplane}></img>
        </div>
    )
}

export default About;