import React from 'react';
import { Link } from 'react-router-dom';
import StudyCase from '../components/StudyCase';
import study from '../Data/study';

const Works = () => {
   return (
      <div>
          {
           study.map((data) => (
              <Link to={data.slug}> <h3>{data.title}</h3> </Link>
           ))
        }
      </div>
   );
};

export default Works;