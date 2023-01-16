import router from './Routes';
import { RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Foorter';

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
