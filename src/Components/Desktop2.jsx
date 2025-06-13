import React from 'react';
import { IconHome } from '@tabler/icons-react';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function  Desktop2()  {

    return (
      <div>
        <footer className='footer'>
           <div className='footer-top'>
            <div className='footer-left'>

            
                <h1 className='h-f'>Eyewear Pro</h1>
                <p className='p-f'>STAY INSPIRED, STAY LUXURIOUS</p>
                <h2 className='h-2'>All Things are possible with the <br /> right glasses</h2>
                </div>
                <div className='footer-center'>
    <div className='section'>

    <h4>Our Services</h4>
    <ul>
        <li>Sun</li>
        <li>Optical</li>
        <li>Anti rad</li>
    </ul>

</div>

    <div className='section'>
    <h4>Get in Touch</h4>
    <p>-------------</p>
</div>



<div className='section'>
    <h4>Location</h4>
    <ul>
    <li>12348</li>
    <li>12348</li>
    </ul>
    </div>
 </div>
 </div>

<div className='lin'>
    <div className='bott'>
    <a href="">Privacy Policy</a>
    <a href="">Term Of Services</a>
</div>

</div>

<div className='social-icons'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <IconBrandFacebook size={20} style={{ marginRight: '5px' }} />
         
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram size={20} style={{ marginRight: '5px' }} />
          
          </a>
        </div>

            </footer>
        </div>
     
    )
}