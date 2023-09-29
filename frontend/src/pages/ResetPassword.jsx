import React from 'react';
import '../css/ResetPw.css';

export default function ResetPassword() {
  const [otp, setOtp] = React.useState('');

  const handleSubmit = () => {
    // Verify the OTP here
  };

  return (
    <div className="otp-verification-page">
      <h3>OTP Verification</h3>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button className= "btn btn-outline-primary" onClick={handleSubmit}>Verify OTP</button>
      <a href='/register'>
        Resend OTP
      </a>
    </div>
  );
}