import './Footer.css';
import header__logo from '../../utils/header__logo.gif'
function Footer() {
    return (
        <footer>
            <div className='footer__logo-block'>
                <img src={header__logo}></img>
                <p>VLODMER SMERKS</p>
            </div>
            <p>SMERKS has no association with Vladimir Smerkis. This token is simply a meme<br></br>coin with no intrinsic value or expectation of financial return.</p>
            <a href='mailto:vlodmersmerks@gmail.com'>vlodmersmerks@gmail.com</a>
        </footer>
    )
}

export default Footer;