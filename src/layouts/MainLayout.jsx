import React from 'react';
import Footer from '../components/master/footer/Footer';
import Header from '../components/master/header/Header';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null }) => {

  document.title = (title !== null && title !== undefined) ? `${title} || Teacher Jack Online` : `Teacher Jack Online`;

  return (
    <React.Fragment>
      <Header />
      {
        children
      }
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;