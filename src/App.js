
import './App.css';
import ResponsiveAppBar from './components/header/ResponsiveAppBar';
import UnderHeader from './components/header/UnderHeader';

import {BrowserRouter, Route, Routes, Link, Switch} from "react-router-dom"
import Main from './components/pages/main/Main';



function App() {
  return (
    <div className="App">
      <>
      <ResponsiveAppBar />
      <UnderHeader />
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>
      </Routes>
      

      
      
        
      </>
      
      
    </div>
  );
}

export default App;
