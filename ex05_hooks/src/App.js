import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import ListPage from './pages/ListPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/list' element={<ListPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegPage/>}/>
        <Route path='/context' element={<TestPage/>}/>
      </Routes>
    </>
  );
}

export default App;
