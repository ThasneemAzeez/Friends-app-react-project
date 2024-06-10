import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AddFriend/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
    
   </Routes>
    
    
   </BrowserRouter>
      
    </div>
  );
}

export default App;
