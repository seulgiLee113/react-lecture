import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderCom from './components/common/HeaderCom';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route element={<HeaderCom/>}>
        <Route path='/' element={<IndexPage/>}/>
        <Route path="/member">
          <Route path='list' element={<ListPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
