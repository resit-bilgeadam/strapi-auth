import {Routes, Route} from 'react-router-dom';
import styles from './App.module.scss';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Toolbar />
      
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
