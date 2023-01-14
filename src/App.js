import './App.css';
import Message from './components/Message';
import Itemlist from './components/Itemlist';
import Form from './components/Form';
import Itemlist2 from './components/Itemlist2';
import Parentcomp from './components/Parentcomp';
function App() {
  return (
    <>
    <div className="App">
     <Message message= "Hello World!" />
     <Itemlist items={['akhil','akshay','anu','ravi']} />
     <Form />
     <Itemlist2 items = {['Masters','FAANG','Peace']} />
     <Parentcomp />
    </div>
    
    </>
  );
}

export default App;
