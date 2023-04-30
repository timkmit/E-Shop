
import './App.css';
import ResponsiveAppBar from './components/header/ResponsiveAppBar';
import UnderHeader from './components/header/UnderHeader';
import {BrowserRouter, Route, Routes, Link, Switch} from "react-router-dom"
import Main from './components/pages/main/Main';
import Footer from './components/footer/Footer';
import SingleCard from './components/card/SingleCard';



function App() {
  return (
    <div className="App">
      <>
      <ResponsiveAppBar />
      <UnderHeader />
      <Routes>
        <Route path="/singlecard" component={<SingleCard />} />
        <Route path='/' element={<Main />}>
        </Route>
      </Routes>
      <Footer/> 
      </>    
    </div>
  );
}

export default App;
