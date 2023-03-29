import React from "react";
import img1 from'../asset/idli.jpg'
// import img2 from'../asset/pongal.jpg'
function ProductCard(props){
const {data = {}, onChange = (item) => {},disabled= false} = props;
    return(
        <div className='card text-center mb-3' id ="center" style={{width:320}} >
        <div className='ovwerflow'><img src={img1} className="card-img-top" alt="Image 1"/>
        </div>
        {/* <div className='ovwerflow'><img src={img2} className="card-img-top" alt="Image 2"/>
        </div> */}
        <div className='card-body text-dark'>
            <h4 className='card-title'>{data.label || "Name Not Avilable"}</h4>
            <p className='card-text text-secondary '>
               {data.content}
            </p>

            <p>{`₹${data.price}` || "Price Not Avilable"}</p>
            <button disabled = {disabled} className={`btn ${disabled ? 'btn-secondary':'btn-primary'} btn-sm`} onClick ={()=> onChange(data) }>
                {disabled ? 'Added' :'Add Item'}
            </button>
           </div>
        
         
         
         </div>
       

   
      
    )
}

export default ProductCard;