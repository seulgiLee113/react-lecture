import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test03 from "./aaa";
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AA = () => <h3>aaa</h3>
root.render(
  <React.StrictMode>
    <App/>
    <AA/>

  </React.StrictMode>
);

function Test2 () {
  return <h3>Test02</h3> 
}

function Test1() {
  return <h3>Test 1 컴포넌트</h3>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
