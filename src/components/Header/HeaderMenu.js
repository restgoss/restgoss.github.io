import { motion } from 'framer-motion';

function HeaderMenu({ isMenuOpened }) {
    const itemVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    };

    return (
        <motion.div
            key="header__menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="header__menu"
        >
            {['about', 'telegram', 'X', 'BUY NOW'].map((item, index) => (
                <motion.div
                    key={item}
                    className={`header__menu-item${item === 'BUY NOW' ? ' header__menu-buy-item' : ''}`}
                    onClick={() => {
                        if (item === 'telegram') window.open('https://t.me/vlodmersmerks', '_blank');
                        if (item === 'X') window.open('https://x.com/VLODMERSMERKS', '_blank');
                        if (item === 'BUY NOW') window.open('https://app.ston.fi/swap?chartVisible=false&chartInterval=1w&ft=TON&tt=EQAhAQ8RdEnDr52LCpwtB-7TQcxdC5W7bS3ox5-KSjVwXlOJ', '_blank');
                    }}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
                >
                    {item}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default HeaderMenu;
