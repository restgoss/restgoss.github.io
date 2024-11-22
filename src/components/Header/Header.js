import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import header__logo from '../../utils/header__logo.gif';
import './Header.css';
import HeaderMenu from './HeaderMenu';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const header = document.querySelector('.header__layout');
        const headerHeight = header.offsetHeight;

        const handleScroll = () => {
            if (window.scrollY > headerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header__layout ${isScrolled ? 'header__scrolled' : ''}`}>
            <div className="header__logo-block">
                <img alt="Logo" src={header__logo} />
                <p>VLODMER SMERKS</p>
            </div>
            <div className="header__navigation">
                <div className="header__buttons-block">
                    <button className="header__default-button">about</button>
                    <button
                        onClick={() => window.open('https://t.me/vlodmersmerks', '_blank')}
                        className="header__default-button"
                    >
                        telegram
                    </button>
                    <button
                        onClick={() => window.open('https://x.com/VLODMERSMERKS', '_blank')}
                        className="header__default-button"
                    >
                        X
                    </button>
                    <button
                        onClick={() =>
                            window.open(
                                'https://app.ston.fi/swap?chartVisible=false&chartInterval=1w&ft=TON&tt=EQAhAQ8RdEnDr52LCpwtB-7TQcxdC5W7bS3ox5-KSjVwXlOJ',
                                '_blank'
                            )
                        }
                        className="header__buy-button"
                    >
                        BUY NOW
                    </button>
                </div>
                <button
                    className="header__menu-button"
                    onClick={() => setIsMenuOpened(!isMenuOpened)}
                >
                    ☰
                </button>
            </div>

            {/* Обертка AnimatePresence */}
            <AnimatePresence>
                {isMenuOpened && (
                    <HeaderMenu isMenuOpened={isMenuOpened} />
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
