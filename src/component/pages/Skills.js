import React from 'react';

// import skill data
import { techSkills } from '../../data';

 function Skills() {
  return (
    <section className='bg-dark py-12'>
      <div className='container mx-auto'>
        <div
          className='flex justify-around md:grid-flow-col'
        >
          {techSkills.map((techSkills, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 sm:max-h-12' src={techSkills.name} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
