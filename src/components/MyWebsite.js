import React from 'react'
import styled from 'styled-components'

export default function MyWebsite() {
  return (
    <MyWebsiteStyled>
        <h1 id="title">My Website</h1>
        
<p  className="para-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>


    </MyWebsiteStyled>
  )
}


const MyWebsiteStyled=styled.div`
/* .para-text:hover{
    color: violet;
   
} */

.para-text{
    color: violet;
    font-style: italic;
    /* text-align: center; 
    text-align: justify;
    
    */


    
   
}

#title{
    color: rgb(186,133,9);
    font-weight: 1000;


    font-size: 2.9em;/* em for responsive design */
    
    
    /* text-decoration: underline;
    text-transform: uppercase;


    */

}
`



