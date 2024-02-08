import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import ViewDoc from './ViewDoc/ViewDoc';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/view/:id' element={<ViewDoc/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
