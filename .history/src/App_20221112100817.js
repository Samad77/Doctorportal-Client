import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Layout/Routes/Routes';
function App() {
  return (
    <div className="App max-w-[1140px] border-2">
      <RouterProvider router={router}>

      </RouterProvider> 
    </div>
  );
}

export default App;
