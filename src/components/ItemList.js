import React, { useEffect, useState } from 'react';
import { Box } from "@mui/system";
import { Button} from "@mui/material";
import "./ItemList.css"


const ItemList = () => {
  const [externalItems, setExternalItems] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => setExternalItems(data));
  }, []);

  return (
  

       
    <ul className="myclass">
     
      <div className='myclass'>
      <Box className="list-container" >
     
      <p  >
 
 Coins

 </p>
 <p >
 
 Exchange

 </p>
 <p >
 
 Swap

 </p>
 <Box >
        <img src="logo_dark.svg" alt="img"></img>
      </Box>
    </Box>
    <div  >
      <Box className="footer">
      <Box>
        <img src="ss-mark-white.svg" alt="img"></img>
      </Box>
      <p   >
 
 Buy, sell, &amp; swap your favorite assets. No KYC. No added fees. Decentralized.

 </p>
    </Box>


   
      </div>

   
      </div>
      <div className="list-container" display= "grid">
      
        <li>
        <Button className="checkout-btn"> Rank</Button>
       
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.rank}       
          </li>
          
        ))} 
        </li>
        
        <li>
        <Button className="checkout-btn"> Name</Button>
     
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.id}  {item.symbol}    
          </li>
          
        ))} 
        </li>
        <li>
        <Button className="checkout-btn"> Price</Button>
     
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.priceUsd}      
          </li>
          
        ))} 
        </li>
        <li>
        <Button className="checkout-btn"> Market Cap</Button>
     
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.marketCapUsd}      
          </li>
          
        ))} 
        </li>
        <li>
        <Button className="checkout-btn"> Volume (24hr)</Button>
     
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.volumeUsd24Hr}      
          </li>
          
        ))} 
        </li>
        <li>
        <Button className="checkout-btn"> Change (24hr)</Button>
     
        {externalItems.data &&
        (externalItems.data).map((item) => (

          <li key={item.id} className="list">
        {item.changePercent24Hr}      
          </li>
          
        ))} 
        </li>
      </div>
     
                               
                                
                          
     
    </ul>
  );
};

export default ItemList;