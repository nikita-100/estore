import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
import CatNav from './Components/TopNav/CatNav';
import MainComponent from './Components/TopNav/MainComponent';
import SideNav from './Components/TopNav/SideNav';
function App() {
  return (
    <div className="App">
     <TopNav/>
     <CatNav/>
     <MainComponent/>
     
    </div>
  );
}

export default App;
