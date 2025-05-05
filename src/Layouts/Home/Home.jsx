import React from 'react';
import Header from '../../Componenets/Header/Header';
import Main from '../../Componenets/Main/Main';
import LeftNav from '../../Componenets/Main/LeftNav';
import RightNav from '../../Componenets/Main/RightNav';
import LatestNews from '../../Componenets/LatestNews/LatestNews';
import Navbar from '../../Componenets/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>





      <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <aside className='col-span-3 '>
          <LeftNav></LeftNav>
        </aside>

        <div className='col-span-6 '>
          <Main></Main>
        </div>

        <aside className='col-span-3'>
          <RightNav></RightNav>
        </aside>
      </main>




    </div>
  );
};

export default Home;