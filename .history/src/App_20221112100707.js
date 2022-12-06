import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Layout/Routes/Routes';
function App() {
  return (
    <div className="App w-max-[1440] border-2">
      <RouterProvider router={router}>

      </RouterProvider> 
    </div>
  );
}

export default App;
