export default function SearchBar({filterText,setFilterText,inStockOnly,setInStockOnly}){
    return(
      <>     
        <form>
          <input value={filterText} onChange={(e)=>setFilterText(e.target.value)} type="text" placeholder="Search..." />
          <br />
          <label>
            <input checked={inStockOnly} onChange={(e)=>setInStockOnly(e.target.checked)} type="checkbox" />
            
            Only show products in stock
          </label>
        </form>      
      </>
    )
  }