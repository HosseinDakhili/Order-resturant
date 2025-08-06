import React from 'react'
import MainSlider from './MainSlider/MainSlider'
import DiscountFood from './DiscountFood/DiscountFood'
import Categories from './Categories/Categories'
import DiscountFoodSkeleton from './DiscountFood/DiscountFoodSkeleton/DiscountFoodSkeleton'

export default function Home() {
  return (
    <>
     <MainSlider/>
     <DiscountFood/>
     <Categories/>
    </>
  )
}
