import React from 'react';

const FullDetails = ({ newsData, pillarName }) => {
  const filteredNews = newsData.filter((item) => item.pillarName === pillarName);

  return (
    <ul>
      {filteredNews.map((item) => (
        <li key={item.id}>
          <div>{item.type}</div>
          <h2>{item.webTitle}</h2>
        </li>
      ))}
    </ul>
  );
};

export default FullDetails;
