import React from 'react';
import PropTypes from 'prop-types';
import './PageContent.scss'; // Import CSS or SCSS file for styling

const PageContent = ({ children }) => {
  return (
    <div className="page-content">
      {children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;