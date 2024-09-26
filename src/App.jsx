import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import shirt from './assets/shirt.jfif'
import chair from './assets/chair.jfif'
import Card from './component/Card'
import comp from './assets/comp.jfif'
import shirt5 from './assets/shits5.jfif'
import elc from './assets/elc.jfif'
import sofa from './assets/sofa.jfif'
import skin from './assets/skin.jfif'
import jul from './assets/jul.jfif'
import Footer from './component/Footer'


function App() {

  return (
    <>
<Navbar/>
<div className="flex flex-col md:flex-row justify-evenly items-center h-auto md:h-[50vh] p-4">
  <div className='w-full md:w-[40vw] h-[40vh] bg-[lightpink] flex flex-col border-4 border-gray-400'>
    <div className="carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src={chair}
          className="w-full h-full object-cover" // Ensure the image covers the area
          alt="Wooden Metallic Chairs"
        />
        <div className="absolute left-5 right-5 top-5 text-white text-xl font-bold">
          Wooden Metallic Chairs
          <p>Sale Up To</p>
          <h1 className='text-green-300'>40% Off</h1>
        </div>
        <div className="absolute left-5 right-5 top-40">
          <button className="btn bg-orange-300">Button 1</button>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex justify-center space-x-2">
          <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white">●</a>
          <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white">●</a>
          <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white">●</a>
        </div>
      </div>
    </div>
  </div>

  <div className='w-full md:w-[30vw] h-[40vh] bg-[lightgray] flex flex-col justify-evenly border-4 items-center text-center border-gray-400 mt-4 md:mt-0'>
    <h1 className='text-xl font-bold'>Glordano</h1>
    <p className='text-2xl md:text-6xl font-light'>Pack 5 T-Shirts for Summer</p>
    <p className='font-bold'>Starting at <span className='text-red-600'>$99.90</span></p>
    <img src={shirt} className="w-[40%] h-[10vh] object-cover" alt="Shirt" />
  </div>
</div>


<div className='flex flex-col h-auto mt-6'>
  <h1 className='font-bold text-5xl ml-4'>Top Categories of the Month</h1>
  <hr className='mt-5' />
  <div className="flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center w-full mb-4 mt-9">
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={elc} 
          name={'Electronics'} 
          li1={'Smartphones'} 
          li2={'Laptops'} 
          li3={'Tablets'} 
          li4={'Cameras'} 
          li5={'Accessories'} 
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={shirt5} 
          name={'Clothings'} 
          li1={'Casual Shirt'} 
          li2={'Formal Shirt'} 
          li3={'T-Shirt'} 
          li4={'Henley Shirt'} 
          li5={'Button-Up Shirt'} 
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={comp} 
          name={'Computer'} 
          li1={'Desktop'} 
          li2={'Laptop'} 
          li3={'All-in-One'} 
          li4={'Gaming PC'} 
          li5={'Workstation'} 
        />
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full mb-4">
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={sofa} 
          name={'Kitchen'} 
          li1={'Cookware'} 
          li2={'Utensils'} 
          li3={'Appliances'} 
          li4={'Tableware'} 
          li5={'Food Storage'} 
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={skin} 
          name={'Beauty'} 
          li1={'Skincare'} 
          li2={'Makeup'} 
          li3={'Haircare'} 
          li4={'Fragrances'} 
          li5={'Beauty Tools'} 
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-2">
        <Card 
          img={jul} // Replace with the actual image variable
          name={'Jewelry'} 
          li1={'Necklaces'} 
          li2={'Bracelets'} 
          li3={'Earrings'} 
          li4={'Rings'} 
          li5={'Watches'} 
        />
      </div>
    </div>
  </div>
</div>



<Footer/>
    </>
  )
}

export default App
