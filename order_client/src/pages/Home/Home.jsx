import React from 'react'
import MainSlider from './MainSlider/MainSlider'
import DiscountFood from './DiscountFood/DiscountFood'
import Categories from './Categories/Categories'
import DiscountFoodSkeleton from './DiscountFood/DiscountFoodSkeleton/DiscountFoodSkeleton'
import Brands from './‌Brands/Brands'
import Comments from './Comments/Comments'

export default function Home() {
  return (
    <>
     <MainSlider/>
     <DiscountFood/>
     <Categories/>
     <Brands/>
     <Comments/>
    </>
  )
}
