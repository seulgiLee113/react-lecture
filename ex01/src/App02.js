import logo from './logo.svg';
import './App.css';
import Test from './aaa';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Ex01 from './Ex01';

function App02() {
  const num = 100;
  console.log("num : ", num);

  const click = () => {
    alert("test");
  }

  return ( <>
    <Ex01/>

  {num === 100 ? "참" : "거짓" } <br/>
  {num === 101 && "참인경우 실행"} <br/>
  num : {num} <br/>
  <Header test="연습중" number={num}/>
    <hr/>
    <Nav name="홍길동" addr="산골짜기"/>
    <hr/>
    <Main myClick={click} tel="010-xxx-xx" nick="도적"/>
  </>
  );
}

export default App02;