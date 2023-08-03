import React, { useState, useEffect } from 'react';
import { fetchNews } from '../redux/news/newsSlice';
import { useSelector, useDispatch } from 'react-redux';
import FullDetails from './FullDetails';
import { Image } from 'react-bootstrap';
import NewsLogo from '../assets/news logo.png'

const Home = () => {
  const dispatch = useDispatch();
  const { newsData, isLoading } = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  
  const pillarCounts = {};
  newsData.forEach((item) => {
    if (pillarCounts[item.pillarName]) {
      pillarCounts[item.pillarName]++;
    } else {
      pillarCounts[item.pillarName] = 1;
    }
  });

  const [selectedPillar, setSelectedPillar] = useState(null);

  const handlePillarClick = (pillarName) => {
    setSelectedPillar(pillarName === selectedPillar ? null : pillarName);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Image src={NewsLogo} alt="news Logo" className="w-100 h-100" />
          <ul>
            {Object.keys(pillarCounts).map((pillarName) => (
              <li key={pillarName}>
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePillarClick(pillarName)}
                >
                  {`${pillarName}: ${pillarCounts[pillarName]}`}
                </p>
                {selectedPillar === pillarName && (
                  <FullDetails newsData={newsData} pillarName={pillarName} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
