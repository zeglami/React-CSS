import React from 'react'
import styled from 'styled-components'

export default function Services() {
  return (
    <ServicesStyled>


<h2 class="subtitle">Services</h2>

<a href="http://www.google.com" id="google-link">Click here to go to Google</a>

<table border="1" class="site-table">
	<thead>
		<tr>
			<td>Lorem</td>
			<td>Ipsum</td>
			<td>Dolor</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Sit</td>
			<td>Amet</td>
			<td>Consectetur</td>
		</tr>
		<tr>
			<td>Adipisicing</td>
			<td>Elit</td>
			<td>Sed</td>
		</tr>
		
	</tbody>
</table>

    </ServicesStyled>
  )
}




const ServicesStyled=styled.div`
#google-link:link{
color: blue;
}

#google-link:visited{
color: red;
}

`