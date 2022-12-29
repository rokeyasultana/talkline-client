import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
    </div>
  );
}

export default App;
