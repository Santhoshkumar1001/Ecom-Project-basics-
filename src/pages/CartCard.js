import React from "react";
import img1 from'../asset/idli.jpg'

export default function CartCard(props){

    const {data = {}, onRemove = (item) => {},} = props;
    return(
        <div className='card text-center mb-3' style={{width:320}}>
        <div className='ovwerflow'><img src={img1} className="card-img-top" alt="Image 1"/>
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>{data.label || "Name Not Avilable"}</h4>
            <p className='card-text text-secondary '>
               {data.content}
            </p>

            <p>{`₹${data.price}` || "Price Not Avilable"}</p>
            <button className={`btn'btn-danger' btn-sm`} onClick ={()=> onRemove(data) }>
                Delete
            </button>
           </div>
        
         
         
         </div>
       

   
      
    )
}