import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

  const { thumbnail_url, details, title } = news;
  return (
    <div className='border border-gray-200 p-5'>
      <div>
        <img className='w-full' src={thumbnail_url} alt="img" />
      </div>
      <h1 className='text-2xl font-bold my-5'>{title}</h1>
      <p className='text-justify text-accent'>{details}</p>



      <Link to={'/category/0'}>
        <button className='mt-5 py-3 px-6 bg-secondary text-white flex items-center gap-2'><IoMdArrowBack size={25} /> All news in this category</button>
      </Link>


    </div>
  );
};

export default NewsDetailsCard;