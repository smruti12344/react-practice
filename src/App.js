import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.module';
import { useState } from 'react';
import LifeCycle from './Components/LifeCycle.Module';
import Api from './Components/Api.module';
import TwowayBindingClassComponent from './Components/Two-wayBindingClassComponent';

function App() {
  const[name,setName]=useState("");
  function inputHandler(e){
    setName(e.target.value);
  }
  return (
    <div className='w-100 bg-dark text-white' >
    <header  className='d-flex align-items-center justify-content-center'>
    <h1 className='bg-dark  text-white p-4'>Hello welcome to react js !</h1>
    <h3>my self {name}</h3>
    <Header className="border-bottom-2 border-white" onInputChange={inputHandler}/>
    </header>
    <section className='d-flex justify-content-between'>
    <main className='col-3'>
      <Api/>
    </main>
    <aside className='col-2'>
      <TwowayBindingClassComponent/>
    </aside>
    </section>
    <footer>
      <LifeCycle/>
    </footer>
    </div>
  );
}

export default App;
