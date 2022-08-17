import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './components/Detail';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Detail/:id' element={<Detail/>}/>
      
    </Routes>
    </BrowserRouter>
  );
  
}
export default App;