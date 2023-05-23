import React, {useState} from 'react';
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Contact from './component/pages/Contact';
import Resume from './component/pages/Resume';
import Navbar from './Navbar';
import Skills from './component/pages/Skills';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About/>;
        }
        if(currentPage === 'Projects') {
            return <Projects/>;
        }
        if(currentPage === 'Skills') {
            return <Skills/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Resume/>
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage = {currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* <About />
            <Projects />
            <Skills />
            <Contact /> */}
        </div>
    );
}
export default PortfolioContainer;
