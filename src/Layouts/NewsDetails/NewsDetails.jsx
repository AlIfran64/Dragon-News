import React, { useEffect, useState } from 'react';
import Header from '../../Componenets/Header/Header';
import RightNav from '../../Componenets/Main/RightNav';
import NewsDetailsCard from '../../Componenets/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

  const [news, setNews] = useState({});

  // load data
  const newsData = useLoaderData();
  // get id from url
  const { id } = useParams();

  console.log(news);


  useEffect(() => {
    const news = newsData.find((singleNews) => singleNews.id == id);
    setNews(news);
  }, [newsData, id])



  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
        <section className='col-span-9'>
          <h1 className='mb-3 font-bold'>Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        <aside className='col-span-3'>
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;