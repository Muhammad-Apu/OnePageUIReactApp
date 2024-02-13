export default function ProductRow({product}){
    return(
      <>
      
        <tr>
          {
            (product.stocked)?
            <>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </>
            :
            <>
              <td style={{color:"red"}}>{product.name}</td>
              <td style={{color:"red"}}>{product.price}</td>
            </>
          }
          
          
        </tr>
  
      </>
    )
  }