import './App.css';
import Input01Con from './containers/form/Input01Con';
import CheckBox02Con from './containers/form/CheckBox02Con';
import RadioBtn03Con from './containers/form/RadioBtn03Con';
import UseRef03Con from './containers/form/UseRef03Con';
import UseRef04Con from './containers/form/UseRef04Con';

function App() {
  return (
    <>
      <UseRef04Con/>
      <hr/>
      <UseRef03Con/>
      <hr/>
      <RadioBtn03Con/>
      <hr/>
      <CheckBox02Con/>
      <hr/>
      <Input01Con/>
    </>
  );
}

export default App;
