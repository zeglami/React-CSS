import React from 'react'
import styled from 'styled-components'


export default function AboutMe() {
  return (
    <AboutMeStyled>
<h2 className="subtitle" id="about-me">About Me</h2>

<img src="./img/imgA.jpg" id="about-us-image" alt='alttest'/>

<p class="para-text">Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<span class="italics">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. 

Cillum dolore eu fugiat nulla , pariatur:

	<ul>
		<li class="list-item">Excepteur sint occaecat</li>
		<ol>
			<li class="list-item">My numbered list item</li>
            <li class="list-item">My numbered list item</li>
            <li class="list-item">My numbered list item</li>
		</ol>
	</ul>
</p>
    </AboutMeStyled>
  )
}



const AboutMeStyled=styled.div`

.subtitle{
    color: rgb(219,168,50);
}

ul>li{
    color: red;
}

ol>li{
    color: green;
}

`