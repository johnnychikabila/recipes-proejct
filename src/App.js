import { Route, Routes} from 'react-router-dom';

import { Header } from '../../food-project/src/components/Header';
import { Footer } from '../../food-project/src/components/Footer';

import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {NotFound} from './Pages/NotFound';
import { Category } from './Pages/Category';
import { Recipe } from './Pages/Recipe';

function App() {
  return (
  <>
    <Header />
      <main className='container content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/category/:name" element={<Category/>}/>
          <Route path="/meal/:id" element={<Recipe/>}/>
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </main>
    <Footer />
  </>
  );
}

export default App;
