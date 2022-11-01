import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Pages/Routes';

function App() {
  return (
    <div className="container">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
