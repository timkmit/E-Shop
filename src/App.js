
import './App.css';
import ResponsiveAppBar from './components/header/ResponsiveAppBar';
import UnderHeader from './components/header/UnderHeader';
import Content from './components/body/Content'
import InfoUnderHeader from './components/infoUnderHeader/InfoUnderHeader';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <UnderHeader />
      <InfoUnderHeader />
      <Content />
    </div>
  );
}

export default App;
