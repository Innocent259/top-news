import React, { useEffect } from 'react';
import { fetchNews } from '../redux/news/newsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { newsData, isLoading } = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {newsData.map((item) => (
            <li key={item.id}>
              <p>Type: {item.type}</p>
              <p>Section Name: {item.sectionName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
