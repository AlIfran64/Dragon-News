import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Componenets/NewsCard/NewsCard';

const Category = () => {

  // get data
  const data = useLoaderData();

  // get id
  const { id } = useParams();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    // for all news
    if (id == "0") {
      setCategoryNews(data);
      return;
    }
    // for breaking news today
    else if (id == "1") {
      const filteredNews = data.filter((news) => news.others.is_today_pick == true);
      setCategoryNews(filteredNews);
    }
    else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);






  return (
    <div>
      <h1 className='font-bold'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h1>
      <div className='grid grid-cols-1 gap-5 my-5'>
        {
          categoryNews.map((news, index) => <NewsCard key={index} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default Category;