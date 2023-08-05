import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillForwardFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'react-bootstrap';
import { fetchNews } from '../redux/news/newsSlice';
import newsImage from '../assets/world2-39.png';

const Home = () => {
  const dispatch = useDispatch();
  const { newsData, isLoading } = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="py-5" style={{ height: '100%' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="sub-header w-100">By web title</div>
          <ul className="home-lists">
            {newsData.map((item) => (
              <li key={item.id} className="card-">
                <div className="heading-part">
                  <Image
                    src={newsImage}
                    alt="news detail logo"
                    className="img-fluid"
                  />
                  <Link state={item} to={`/${item.sectionName}`}>
                    <BsFillForwardFill className="fs-2 text-white" />
                  </Link>
                </div>
                <h2 className="text-start title fs-3">
                  {item.webTitle.length > 25
                    ? `${item.webTitle.substring(0, 25)}...`
                    : item.webTitle}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
