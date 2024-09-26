import React from 'react';

function Card(props) {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-full sm:w-1/2 md:w-[30vw] md:w-[30vw] flex border-4 border-gray-400 rounded-none m-2">
      <figure className="flex items-center justify-center ml-6">
        <img src={props.img} alt={props.name} className="w-48 h-auto" />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center">
        <h2 className="card-title">{props.name}</h2>
        <ul className="list-none pl-5">
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
          <li>{props.li4}</li>
          <li>{props.li5}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
