import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Layout/Routes/Routes';
import Cards from './Pages/Home/Cards/Cards';
function App() {
  return (
    <div className="App max-w-[1440px] mx-auto border-4">
      <RouterProvider router={router}>
          
      </RouterProvider> 
    </div>
  );
}

export default App;
