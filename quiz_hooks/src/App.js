import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import HeaderCom from './components/common/HeaderCom';
import MListPage from './pages/member/MListPage';
import NotFound from './components/common/NotFound';
import MOnePage from './pages/member/MOnePage';
import MDeletePage from './pages/member/MDeletePage';
import SignUpPage from './pages/member/MRegPage';
import MModifyPage from './pages/member/MModifyPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route element={<HeaderCom/>}>
        <Route path="/" element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/member">
          <Route path='list' element={<MListPage/>}/>
          <Route path='one' element={<MOnePage/>}/>
          <Route path='modify/:id' element={<MModifyPage/>}/>
          <Route path='delete/:id' element={<MDeletePage/>}/>
          <Route path='register' element={<SignUpPage/>}/>
        </Route>
      </Route>
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
