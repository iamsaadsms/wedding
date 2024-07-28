import React, { useState } from 'react';
import Preloader from './Common/Preloader';
import Home from './Home/Home';

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsPreloading(false);
  };

  return (
    <div>
      {isPreloading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
