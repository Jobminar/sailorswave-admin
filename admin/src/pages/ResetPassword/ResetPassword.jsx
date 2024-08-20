import React from 'react'

const ResetPassword = () => {
  return (
    <>
      <div className='container'>
        <div className='col'>
            <img src={""} alt="sailors-image"/>
        </div>
<div className='col'>
    <img src={""} alt="sailors-Icon"/>
    <p>New Password</p>
    <p>Set the new password for your account so you can login and access all features.</p>
    <form>
        <label id="newPassword">Enter new Password</label>
        <input type="password" id="newPassword" placeholder='8 symbols at least'/>
        <label id="confirmPassword">ConfirmPassword</label>
        <input type="password" id="confirmPassword" placeholder='8 symbols at least'/>
        <button type='submit'>UPDATE PASSWORD</button>
    </form>
</div>
      </div>
    </>
  )
}

export default ResetPassword
