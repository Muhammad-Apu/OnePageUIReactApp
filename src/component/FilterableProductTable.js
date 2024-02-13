import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

import React from 'react'

import PRODUCTS from "../service/products"

import { useState } from "react"

const FilterableProductTable = () => {
  const [filterText,setFilterText]=useState("")
  const [inStockOnly,setInStockOnly]=useState(false)
  let filterArray;
  

    if(inStockOnly){
      filterArray=PRODUCTS.filter((ele)=>{
        return ele.stocked===true;
      }).filter((ele)=>{
        return ele.name.toLocaleLowerCase().includes(filterText)
      })
    }else{
      filterArray=PRODUCTS.filter((ele)=>{
        return ele.name.toLocaleLowerCase().includes(filterText)
      })
      
    }
    
  
  return (
    < >
        <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        setFilterText={setFilterText} 
        setInStockOnly={setInStockOnly} />
        <ProductTable PRODUCTS={filterArray}/>     
    </>
  )
}



export default FilterableProductTable

 