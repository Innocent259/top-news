import React from 'react';
import { useLocation } from 'react-router-dom';

const FullDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="full-details-data py-5 text-start d-flex flex-column">
      <h3 className="display-6 p-3 flex-fill item-1">
        News section name:
        {' '}
        {data.sectionName}
      </h3>
      <p className="display-6 p-3 flex-fill item-2">
        Publication date:
        {' '}
        {data.webPublicationDate}
      </p>
      <p className="display-6 p-3 flex-fill item-3">
        Web title:
        {' '}
        {data.webTitle}
      </p>
      <h3 className="display-6 p-3 flex-fill item-4">
        New pillar name:
        {' '}
        {data.pillarName}
      </h3>
      <span className="bg-info p-3 text-center flex-fill item-5">
        <a href={data.webUrl} className="btn w-75">
          Read the news
        </a>
      </span>
    </div>
  );
};

export default FullDetails;
