import React from 'react'
import './Contact.css'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c8f0e65f-7885-4af0-ba82-bc43a70700fd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's chat</h1>
                <p>I'm currently available to take on new projects, so feel free to reach out. I would love to work with you!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                          <img src={locationIcon} alt='' /><p>OR, United States</p>
                      </div>
                      <div className='contact-detail'>
                          <img src={mailIcon} alt='' /><p>christinahollie7@gmail.com</p>
                      </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write a message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'/>
                <button type='submit' className='contact-button'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact