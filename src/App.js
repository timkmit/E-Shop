
import './App.css';
import ResponsiveAppBar from './components/header/ResponsiveAppBar';
import UnderHeader from './components/header/UnderHeader';
import Content from './components/body/Content'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <UnderHeader />
      <Content />
    </div>
  );
}

export default App;
