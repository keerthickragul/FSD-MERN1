import React from "react";
import './Firstcss.css';
import Navbar from "./Navbar";
import vector from '../images/slider-bg.jpg'
import { Link,useNavigate} from "react-router-dom";
function First(){
    const navis = useNavigate();
    const handleto = ()=>{
        navis('/home')
       }
  return <>
    <Navbar />
    
    <div className="firstbox">
        <div className="divleft">
           <p className="sales" style={{color:"#f7444e"}}>Sale 20% Off</p>
           <p className="eveything">On Everything</p>
           <div className="leftinner">
            <p className="firstpara">Explicabo esse amet tempora quibusdam laudantium,<br/>haieaque magnam fugiat hic? Esse dicta 
            aliquid error  udiandae earum suscipit fugiat molestias, veniam, vel rchitecto veritatis delectus
             repellat modi impedit sequi.</p>
           </div>
           <button className="firstbtn" onClick={handleto}>Shop</button>
        </div>
        <div className="divright">
        {/* <img src={vector} alt="vector" className="image"/> */}
        </div>
          <div className="info-container">
                <div className="about">
                    <h2>About Us</h2>
                    <p>
                        Welcome to our store! We are dedicated to providing you with the best products at the best prices.
                        Our mission is to bring you high-quality items that meet your needs and exceed your expectations.
                        We believe in excellent customer service and are always here to help you with any questions or concerns.
                    </p>
                </div>
                <div className="contact">
                    <h2>Contact Info</h2>
                    <p>Email: info@ourstore.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Main Street, Kinathukadavu,Coimbatore</p>
                </div>
            </div> 
            </div>
    
   
  </>
}
export default First;