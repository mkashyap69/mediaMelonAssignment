import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import SideFilter from './components/SideFilter';
import { defaultConfig } from './utils/constants';

function App() {
  const [sideFilterConfig, setSideFilterConfig] = useState(defaultConfig);
  return (
    <div className="container">
      <Header setSideFilterConfig={setSideFilterConfig} />
      <div className="main">
        <SideFilter
          setSideFilterConfig={setSideFilterConfig}
          sideFilterConfig={sideFilterConfig}
        />
        <Content
          sideFilterConfig={sideFilterConfig}
          setSideFilterConfig={setSideFilterConfig}
        />
      </div>
    </div>
  );
}

export default App;
