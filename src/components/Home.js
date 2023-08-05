import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillForwardFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'react-bootstrap';
import { fetchNews } from '../redux/news/newsSlice';
import newsImage from '../assets/world2-39.png';

const Home = () => {
  const dispatch = useDispatch();
  const { newsData, isLoading } = useSelector((store) => store.news);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredNews(newsData);
    } else {
      const filtered = newsData.filter((item) => {
        if (
          item.webTitle.toLowerCase().includes(searchTerm.toLowerCase())
          || item.pillarName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setFilteredNews(filtered);
    }
  }, [searchTerm, newsData]);

  // Create an object to track the counts of web titles
  const webTitleCounts = {};
  filteredNews.forEach((item) => {
    if (webTitleCounts[item.webTitle]) {
      webTitleCounts[item.webTitle] += 1;
    } else {
      webTitleCounts[item.webTitle] = 1;
    }
  });

  return (
    <div className="py-5" style={{ height: '100%' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="sub-header w-100">
            <input
              type="text"
              placeholder="Search by Web Title or Pillar Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-by"
            />
          </div>
          <ul className="home-lists">
            {filteredNews.map((item) => (
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
                <small className="fw-bold text-tertiary">{`Found: ${webTitleCounts[item.webTitle]}`}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
