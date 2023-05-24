import React from "react";

// import social data
import { social } from './data';

export default function Footer ({ currentPage }){
  const isFixedPosition =
    currentPage === "AboutMe" || currentPage === "Contact";
  return (
    <footer className={isFixedPosition ? "fixed-footer" : ""}>
         <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base footerButtons' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
    </footer>
  );
};
