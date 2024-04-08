import React from "react";
import PropTypes from "prop-types";
import "./Button.scss"; // Import the SCSS file for styling

export default function Button({ children, textOnly, className, ...props }) {
    const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`

    return <button className={cssClasses} {...props}>
        {children}
    </button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  textOnly: PropTypes.bool,
  className: PropTypes.string,
};