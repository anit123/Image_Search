import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './component/navbar/Navbar';
import Search from './component/search/Search';

function App() {
  return (

      <MuiThemeProvider>
        <div>
        <Navbar/>
        <Search/>
        </div>
      </MuiThemeProvider>

  );
}

export default App;
