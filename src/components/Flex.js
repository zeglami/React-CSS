import React from "react";
import styled from "styled-components";

export default function Flex() {
  return (
    <FlexStyled>
      <div id="service-image"></div>

      <div class="container">
        <div> A</div>
        <div> B</div>
        <div> C</div>
        <div> D</div>
        <div> E</div>
        
      </div>

      <div class="grid-container">
        <div> 1</div>
        <div> 2</div>
        <div> 3</div>
        <div> 4</div>
        <div> 5</div>
        <div> 6</div>
      </div>
    </FlexStyled>
  );
}

const FlexStyled = styled.div`

#service-image{
    height: 20cm;
    width: 70%;
   

   /*  
   background-repeat:no-repeat; // will not be reapted in div
    background: url("./img/imgB.jpg");//imqge as bg
    background-size:cover; //will be in all div
   
     background: linear-gradient(to right,red,blue,green);
      background: linear-gradient(to right,rgba(2, 229, 255,0.9),rgba(2, 229, 255,0.4),rgba(2, 229, 255,0.1));
      background: linear-gradient(to top,rgba(2, 229, 255,0.9),rgba(2, 229, 255,0.4),rgba(2, 229, 255,0.1));
      background: linear-gradient(to bottom right,rgba(2, 229, 255,0.9),rgba(2, 229, 255,0.4),rgba(2, 229, 255,0.1));
       background: linear-gradient(180deg,rgba(2, 229, 255,0.9),rgba(2, 229, 255,0.4),rgba(2, 229, 255,0.1));
        background: radial-gradient(rgba(2, 229, 255,0.9),rgba(2, 229, 255,0.4),rgba(2, 229, 255,0.1) 90%,red 90%)
   
   */
  
     background: radial-gradient(circle,green,blue,red );

}


`;
