import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Layout/Routes/Routes';
function App() {
  return (
    <div className="App max-w-[1440px] border-2 mx-auto">
      <RouterProvider router={router}>

      </RouterProvider> 
    </div>
  );
}

export default App;
