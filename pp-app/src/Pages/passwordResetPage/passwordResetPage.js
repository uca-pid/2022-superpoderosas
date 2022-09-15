import React, { useState } from 'react';

export default function PasswordResetPage() {

  return (
    <>
    <form action="/resetpassword" method="POST">
        <input type="hidden" name="token" value="' + req.params.token + '" />
        <input type="password" name="password" value="" placeholder="Enter your new password..." />
        <input type="submit" value="Reset Password" />
    </form> 
    </>
  )
}