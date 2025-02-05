import React from 'react'
import { useGetTop5Query } from './productApi'
import { Carousel } from '@material-tailwind/react';
import { base } from '../../app/port';

export const TopProducts = () => {

  const { data, isLoading, isError } = useGetTop5Query();
  console.log(data);

  if (isError) {
    return <h1>{isError.message}</h1>
  }

  return (<>

    {data && <Carousel className="rounded-xl h-[499px] w-[80%] mx-auto mt-4 mb-6" autoplay loop >

      {data.product.map(({ _id, image }) => {
        return <img
          key={_id}
          src={`${base}/${image}`}
          alt="image 1"
          className="h-full w-full  object-contain"
        />;
      })}


    </Carousel>
    }

  </>
  )
}