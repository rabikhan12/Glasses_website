export default function Content()  {
  
    return (
      <div>
        <div className='bg'></div>
<div className='girl'>

    <div className='pic'>
        <img src="girl.png" alt="" />


    </div>
    <div className='text'>
        <div className='t-h'>
        <h3 className='heading'>Discover your ideal eyewear style</h3></div>

<div className='t-p'>
        <p className='paragraph'>“We Specialize in discovering your ideal <br /> match. Discover the transformative impact <br /> a perfect pairing can have. Let’s uncover <br /> your collaboratively”</p>
        </div>

    </div>
<div className='button'>
    <div className='buttonn'> <button type='buttonn' className='sun'>sun</button>
    <button 

    ///add on click function 
    // onClick={()=> navigate (/Glasses_list_screen)}


type='buttonn' className='optical'>optical</button>
<button type='buttonn' className='antirad'>anti rad</button>    
    </div> <br />
    <div className='par'> <p>The lightest optical frames around.</p></div>
</div>
        </div>
        <div className='bgg'>





<div className='hh'>
    <h2 className='head'>New Arrivals</h2>
</div>
<div className='paa'>
    <p className='parag'>Unveil Our Newest Eyewear Arrivals and Elevate <br /> Your Look with the Latest Trends and Designs. <br /> Discover a World of Fashion-forward Frames <br /> Waiting Just for You!</p> <br />
    <div className='b'>
    <button type='button' className='bb'>Learn more</button></div>
</div>


<div className='glasses'> 
    <div className='card '>
    <img src="sun.jpg" alt="" />
    
    <p className='label'>sun</p>
    </div>
    
    <div className='card '>
    <img src="optical.jpg" alt="" />
    
    <p className='label'>optical</p>
    </div>

    <div className='card'>
    <img src="anti rad.jpg" alt="" />
    <p className='label'>anti rad</p>
    </div>
</div>
<div className='upl'>
    <button type='button' className='but'>Upload image</button>
   <br />
      <button type='button' className='butt'>Camera</button>
</div>
        </div>
      </div>
    )
  }
