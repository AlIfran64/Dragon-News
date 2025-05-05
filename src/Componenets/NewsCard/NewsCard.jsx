import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router';


const NewsCard = ({ news }) => {
  console.log(news);

  const { author: { img, name }, title, thumbnail_url, details, rating: { number }, total_view, id } = news

  // for current date:
  const currentDate = news.author.published_date.split('T')[0];

  // star
  const filledStars = Array(number).fill(<FaStar className="text-[#FF8C47] text-lg" />);
  // Generate the empty stars
  const emptyStars = Array(5 - number).fill(<FaStar className="text-gray-300 opacity-50 text-lg" />);

  return (
    <div className='mb-4'>

      {/* top box */}
      <div className='bg-base-200 p-4 rounded-t-lg flex justify-between items-center'>

        {/* left */}
        <div className='flex justify-center items-center gap-4'>
          <img className='w-[40px] h-[40px] rounded-full' src={img} alt="image" />
          <div>
            <p className='font-semibold'>{name}</p>
            <p className='text-accent text-sm'>{currentDate}</p>
          </div>
        </div>

        {/* Right */}
        <div className='flex justify-center items-center gap-2'>
          <Link><CiBookmark className='text-2xl' /></Link>
          <Link><CiShare2 className='text-2xl' /></Link>
        </div>
      </div>

      {/* Bottom box */}
      <div className='p-5 border border-t-0 border-l-[#E7E7E7] border-r-[#E7E7E7] border-b-[#E7E7E7] rounded-b-lg box-border'>
        <p className='text-xl font-bold'>{title}</p>
        <img className='w-[750px] h-[370px] my-6 mx-auto rounded-sm' src={thumbnail_url} alt="" />
        <p className='text-justify line-clamp-3'>{details}</p>
        <Link to={`/news-details/${id}`}><button className='text-[#FF8C47] font-semibold cursor-pointer my-2'>Read more</button></Link>

        <div className='border-b border-b-[#E7E7E7] my-2'></div>


        <div className='flex justify-between items-center'>
          <div className="flex items-center">
            {/* Render the filled stars */}
            {filledStars}
            {/* Render the empty stars */}
            {emptyStars}
            <div>
              <p className='ml-3 text-accent text-lg'>{number}</p>
            </div>
          </div>

          <div className='flex justify-between items-center gap-2'>
            <MdRemoveRedEye className='text-2xl text-accent' />
            <p className='text-accent'>{total_view}</p>
          </div>
        </div>

      </div>

    </div >
  );
};

export default NewsCard;