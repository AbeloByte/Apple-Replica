import  './assets/css/bootstrap.css';
import  './assets/css/styles.css';

import './App.css'


//eslint-disable-next-line no-unused-vars
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Iphone from './components/pages/Iphone/Iphone';
import Four04 from './components/NotFound/Four04';
import Layout from './components/Layout/Layout';
import IphoneDetail from './components/pages/Iphone/IphoneDetail/IphoneDetail';
function App() {



  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
            <Route path='/' element={<Home/>}/>

            <Route path='/iphone' element={<Iphone/>}/>







            <Route path="iphone/:id" element={<IphoneDetail />} />  
            <Route path='*' element={<Four04/>}/>  
        </Route>
      </Routes>
    </>
  )
}

export default App
