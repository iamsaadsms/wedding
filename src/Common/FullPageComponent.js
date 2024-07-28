import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPageComponent = () => (
  <ReactFullpage
    // FullPage.js configuration options
    licenseKey={'YOUR_KEY'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <div className="section">
            <h1>Section 1</h1>
          </div>
          <div className="section">
            <h1>Section 2</h1>
          </div>
          <div className="section">
            <h1>Section 3</h1>
          </div>
        </div>
      );
    }}
  />
);

export default FullPageComponent;
