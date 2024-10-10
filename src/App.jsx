import React from 'react';
import Cards from './Compounts/cards';


function App() {
  return (
    <div className="App  bg-gray-100 min-h-screen">
      <div className='bg-green-300 text-white py-6 text-center' >
        <h1 className='text-3xl font-bold'> Brand Store   </h1>
      </div>
     
      <Cards />
      <Cards />
      <Cards/>
     
    </div>
  );
}

export default App;

