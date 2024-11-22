import './Profile.css';
import vlodmer from '../../utils/vlodmersmerks__round.png';
import copy from '../../utils/copy__ca.svg';
import x from '../../utils/x.svg';
import telegram from '../../utils/telegram.svg';
import dexscreener from '../../utils/dexscreener.svg';
import gecko from '../../utils/gecko.svg';
import coinmarket from '../../utils/coinmarket.svg';
import { useNavigate } from 'react-router-dom';

function Profile({ tokenInfo }) {
    const navigate = useNavigate();
    const contractAddress = "EQAhAQ8RdEnDr52LCpwtB-7TQcxdC5W7bS3ox5-KSjVwXlOJ";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(contractAddress)
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <div className="profile__block">
            <div className="profile__tribe-block">
                <img alt="" />
                <div className="profile__tribe-block__text-block">
                    <h2>VLODMER SMERKS TRIBE</h2>
                    <p>900+ HOLDERS</p>
                </div>
                <button
                    onClick={() => window.open('https://t.me/vlodmersmerkshub', '_blank')}
                    className="profile__tribe-block__button"
                >
                    join
                </button>
            </div>
            <img className="vlodmer__image" src={vlodmer} alt="Vlodmer" />
            <h2 className="profile__smerks">$SMERKS MC: {tokenInfo?.marketCap || 99999}$</h2>
            <div className="profile__ca-row">
                <p>
                    CA: <span>{contractAddress}</span>
                </p>
                <img
                    src={copy}
                    alt="Copy to clipboard"
                    onClick={handleCopy}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div className="profile__logos-block">
                <img
                    onClick={() => window.open('https://x.com/VLODMERSMERKS', '_blank')}
                    src={x}
                    alt="Twitter"
                />
                <img
                    onClick={() => window.open('https://t.me/vlodmersmerks', '_blank')}
                    src={telegram}
                    alt="Telegram"
                />
                <img
                    onClick={() =>
                        window.open(
                            'https://dexscreener.com/ton/eqdjzwzqfnj_bqxdqrpl5slb_o5e4bkrk8kk7pn6emox8e7k',
                            '_blank'
                        )
                    }
                    src={dexscreener}
                    alt="Dex Screener"
                />
                <img
                    onClick={() =>
                        window.open(
                            'https://www.geckoterminal.com/ru/ton/pools/EQDjZwZQfnJ_bqxDqRpL5Slb_O5E4bKrk8KK7pN6EmOX8E7k',
                            '_blank'
                        )
                    }
                    src={gecko}
                    alt="Gecko"
                />
                <img
                    onClick={() =>
                        window.open(
                            'https://coinmarketcap.com/dexscan/ton/EQDjZwZQfnJ_bqxDqRpL5Slb_O5E4bKrk8KK7pN6EmOX8E7k/',
                            '_blank'
                        )
                    }
                    src={coinmarket}
                    alt="CoinMarket"
                />
            </div>
        </div>
    );
}

export default Profile;
