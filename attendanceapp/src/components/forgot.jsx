import React from 'react'
import "../Style/forgot.css"
const forgot = () => {
  return (
    <>
    <div className='to'>
    <div class="rows">
		<h1 class="py-3 text-5xl md:text-7xl font-bold">Forgot Password</h1>
		<h6 class="information-text">Enter your information to reset your password.</h6>
		<div class="form-group">
			<input type="email" name="user_email" id="user_email"/>
			<p><label for="username">Name</label></p>
            <input type="email" name="user_email" id="user_email"/>
			<p><label for="username">Phone number</label></p>
            <input type="email" name="user_email" id="user_email"/>
			<p><label for="username">Email</label></p>
			<button onclick="showSpinner()">Reset Password</button>
		</div>
	</div>
    </div>
  </>


  )
}

export default forgot