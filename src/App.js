
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';
import './Assets/styles/App.css';

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
