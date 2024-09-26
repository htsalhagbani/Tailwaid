import React from 'react';
import head from '../assets/head.jfif'; // Adjust the import according to your project structure

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content flex flex-col md:flex-row justify-between items-center mt-20 p-4">
      {/* Text Sections */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:w-3/5 mb-4 md:mb-0">
        <div className="p-4 flex flex-col w-full md:w-3/5">
          <h1 className="text-3xl font-bold">Boose Bluthoth Wireless Headphones</h1>
          <p className="text-lg">
            Crisp powerful sound from the best sounding wireless headphones in its class
          </p>
        </div>
        <div className="p-4 flex flex-col items-center w-full md:w-2/5">
          <p className="text-gray-500 centered-line pt-2">
            $260.50
          </p>
          <p className="text-lg text-gray-700">$219.05</p>
          <button className="bg-orange-300 px-4 py-2 rounded">Shop Now</button>
        </div>
      </div>

      {/* Image Section */}
      <img src={head} className="object-cover h-32 md:h-40 w-full md:w-1/3" alt="Footer Image" />
    </footer>
  );
}

export default Footer;
