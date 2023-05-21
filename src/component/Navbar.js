import React from "react";

import { navigation } from '../data';
import { Link } from 'react-scroll';


function NavTabs() {
  return (
    <nav>
      <ul className='space-x-8 capitalize text-[20px] justify-right flex'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavTabs;