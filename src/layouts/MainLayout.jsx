import React from 'react';
import Footer from '../components/master/footer/Footer';
import Header from '../components/master/header/Header';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null, isLoading = false, loadingMessage = "content" }) => {

  document.title = (title !== null && title !== undefined) ? `${title} || Neurosurgeon Dr. Atique` : `Neurosurgeon Dr. Atique`;

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