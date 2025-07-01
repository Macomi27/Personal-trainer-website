import React from 'react';
import './Signup.css'

const Signup = () => {
    return(
        <div className="signup-container">
            <div className="signup-content">
                <h3>Still hesitating?</h3>
                <p>Sign up for the first training for FREE!</p>
                <form action="">
                    <div className="email">
                        <label htmlFor="email">Your e-mail:</label>
                        <input type="email" id="email" name="email" placeholder="address@email.com" required />
                    </div>
                    <div className="fullName">
                        <label htmlFor="fullName">Full name:</label>
                        <input type="name" id="fullName" name="fullName" placeholder="John Smith" required />
                    </div>
                    <div className="signup-btn">
                        <button className='signup-btn'>sign up for a training</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Signup;