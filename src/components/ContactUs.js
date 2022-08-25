import React from 'react'
import styled from 'styled-components'

export default function ContactUs() {
  return (
    <ContactUsStyled>

<h2 class="subtitle">Contact Us</h2>

<form>
	<input type="text" placeholder="Full Name" class="form-input"/>
	<input type="email" placeholder="Email" class="form-input"/>
	<textarea></textarea>
	<button class="submit-button">Submit</button>	
</form>

    </ContactUsStyled>
  )
}


const ContactUsStyled=styled.div`
textarea ~button{
    color: purple;
}



`