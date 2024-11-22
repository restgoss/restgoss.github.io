import Header from './components/Header/Header';
import './App.css';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Comics from './components/Comics/Comics';
import { useEffect, useState } from 'react';

function App() {
  const [tokenInfo, setTokenInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTokenInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const chainId = "ton"; // Замените на нужный chainId
        const pairId = "eqdjzwzqfnj_bqxdqrpl5slb_o5e4bkrk8kk7pn6emox8e7k"; // Замените на нужный pairId
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/pairs/${chainId}/${pairId}`,
          {
            method: 'GET',
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setTokenInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTokenInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Profile tokenInfo={tokenInfo?.pairs[0]} />
        <About />
        <Comics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
