import './App.css';
import AppRoters from './components/AppRoters';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoters/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
