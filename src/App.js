
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewTodo from './components/ViewTodo';
import AddTodo from './components/AddTodo';
import Delete from './components/Delete';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
  <Routes>
<Route path='/' element={<AddTodo/>}/>
<Route path='/d' element={<Delete/>}/>
<Route path='/s' element={<Search/>}/>
<Route path='/v' element={<ViewTodo/>}/>

  </Routes>
    </BrowserRouter>
  );
}

export default App;
