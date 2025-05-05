import React from 'react';
import Header from '../../Componenets/Header/Header';
import Main from '../../Componenets/Main/Main';
import LeftNav from '../../Componenets/Main/LeftNav';
import RightNav from '../../Componenets/Main/RightNav';
import LatestNews from '../../Componenets/LatestNews/LatestNews';
import Navbar from '../../Componenets/Navbar/Navbar';
import { useNavigation } from 'react-router';

const Home = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <div className='my-5'>
          <Navbar></Navbar>
        </div>
      </header>





      <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <aside className='col-span-3 sticky top-8 h-fit'>
          <LeftNav></LeftNav>
        </aside>

        <div className='col-span-6 '>
          {state == "loading" ? <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div> : <Main></Main>}
        </div>

        <aside className='col-span-3 sticky top-8 h-fit'>
          <RightNav></RightNav>
        </aside>
      </main>




    </div>
  );
};

export default Home;