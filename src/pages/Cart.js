import React,{useState} from 'react';
import ProductCard from '../pages/ProductCard';
import img1 from'../asset/idli.jpg'
// import'../pages/card-style.css'
import productCard from '../pages/ProductCard';
import CartCard from '../pages/CartCard';

const data =[
    {   
        label:"Idli",
        price:20,
        content:"is idli healthy"
    },
    {    
        label:"pongal",
        price:30,
        content:"is pongal healthy"
    },
    {
        label:"poori",
        price:40,
        content:"is poori healthy"
    },
    {
        label:"vadai",
        price:15,
        content:"is vadai healthy"
    }
]
function Cart(){
   
    const [cart, setCart] = useState([]);

       function handlechange(item = {})
       {
       // console.log(item);
          let cartcopy = [...cart];
          if(item.label)
          {
            cartcopy.push(item);
          }
          setCart(cartcopy);
        }

        function handlecart(item = {}){
            let cartcopy = [...cart];
          if(item.label)
          {
            cartcopy = cartcopy.filter((_data) => _data.label !== item.label)
          }
          setCart(cartcopy);

        }

        function checkCartStatus (item = {}){
            let status = false;
            if(item.label)
            {
                status = cart.filter((_data) => _data.label === item.label).length > 0 ? true : false;
            }
            return status;
        }
    
       return(
        <div className ="container p-3 mb-2 bg-primary text-white" id ="height">
          <div className='row'>
           <div className='col-lg-8'>
                 
           {data.map((_e,i)=>
           <ProductCard disabled={checkCartStatus(_e)} data={_e} onChange = {handlechange}/>
           )}

                
           
            </div>
            <div className='col-lg-4'>
                {cart.map((_d,i)=>(
                   <CartCard data={_d} onRemove={handlecart}/>
                ))}
                
            </div>
        
          </div>
         </div>
    
    )
}

export default Cart;
