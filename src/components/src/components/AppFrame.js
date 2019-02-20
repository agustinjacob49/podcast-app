import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const AppFrame = ({ body}) => {
    return (
        <div>
            <div className="app-frame">
                <div>{body}</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    body:   PropTypes.element.isRequired
};

export default AppFrame;