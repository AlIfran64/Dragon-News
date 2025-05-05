import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('../../../Json data/categories.json').then((res) => res.json());

const Categories = () => {

  // load data:
  const categoriesData = use(categoriesPromise);
  console.log(categoriesData);


  return (
    <div>
      <h2 className='font-bold mb-3'>All Categories ({categoriesData.length})</h2>

      <div className='grid grid-cols-1 justify-items-start gap-2'>
        {
          categoriesData.map((category) =>
            <NavLink
              key={category.id}
              className="py-3 px-6 bg-base-100 border-0 hover:bg-base-200 w-full text-left font-semibold"
              to={`/category/${category.id}`}>

              {category.name}

            </NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;