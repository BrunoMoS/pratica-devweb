import './App.css';

import styles from './components/layout/Container.module.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import ShoppingList from './components/pages/ShoppingList';
import Itens from './components/pages/Itens';
import Item from './components/pages/Item';
import NavBar from './components/layout/NavBar';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/itens' element={<Itens/>}/>
            <Route path='/shoppinglist' element={<ShoppingList/>}/>
            <Route path='/item/:id' element={<Item/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;



          