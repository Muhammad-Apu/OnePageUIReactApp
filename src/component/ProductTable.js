import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"
 







export default function ProductTable({PRODUCTS}){
  
    // console.log(PRODUCTS)
    const uniqueCategory=[]
    PRODUCTS.forEach((curEle)=>{
      if(!uniqueCategory.includes(curEle.category)){
        uniqueCategory.push(curEle.category)
      }
    }) 
  
    const rows=[]
    uniqueCategory.forEach((category,i)=>{
      rows.push(<ProductCategoryRow key={i+100} category={category}/>)
      PRODUCTS.forEach((product,i)=>{
        if(product.category===category){
            rows.push(<ProductRow key={i} product={product}/>)
        }
      })
    })
  
  
  
    return(
      <>
        
        
          <table style={{marginTop:"10px"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
  
            <tbody>
              {rows}
            </tbody>
          </table>
        
  
      </>
    )
    
  }