import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import study from '../Data/study';

const StudyCase = () => {

   const {studySlug} = useParams();

   const [currentStudy, setCurrentStudy] = useState(undefined)

   useEffect(() => {
      const foundStudy = study.find((stu) => stu.slug === studySlug)
      setCurrentStudy(foundStudy)

   }, [studySlug])

   const showStudy = () => {
      return (
         <div className='card border-solid border-2 border-indigo-600 max-w-md'>
            <div className="card-top">
               <img src={currentStudy.image} className='max-w-sm ml-7 mt-2' />
            </div>
            <div className="card-body flex flex-col mt-2 text-center">
               <h3>{currentStudy.slug}</h3>
               <p>{currentStudy.description}</p>
            </div>
            
         </div>
      )
   }

   return (
      <div>
        {
          currentStudy !== undefined ? showStudy() : console.log("aieaieaie")
        }
      </div>
   );
};

export default StudyCase;