"use client"

import Image from 'next/image';
import Line from '../public/Landing_Page_image/Line_between_icon_search_bar.svg';
import Search from '../public/Landing_Page_image/search_icon.svg';
import Section1_right from '../public/Landing_Page_image/section_1_right.png';
import Star from '../public/Landing_Page_image/star.svg';
import stripe_lines from '../public/Landing_Page_image/stripe_lines.png';
import Thumb from '../public/Landing_Page_image/thumb.svg';

import styles from './Section1.module.css';

export default function Home() {
  
  return (
 <>
      {/* Section 1 start  */}
      <div className="section_1_parent " style={{ background: 'linear-gradient(90deg, #F5FCF4 0%, #E5F8E5 100%)',paddingBottom:'143px' }}>
        <div className="section1 mx-auto w-9/12 flex pt-20">
          {/* Section 1 left start */}
          <div className="section1_left w-1/2" style={{ marginTop: '100px', position: 'relative' }}>
       
            <div className={` ${styles.section1_left_intro_text} intro_text `} > Let the adventure begin!</div>
          

         
            <div className={`${styles.section1_left_bold_text} bold_text`}>Create children's stories with AI.</div>
            
           
            <div className={`${styles.section1_left_text_3} `}>Dive into the magical world of storytelling with AI!
            </div>

            <div className={`${styles.section1_left_text_3} `}>
            Introducing OnceUponABot, where your imagination meets technology.</div>

         

         
            <div className={`${styles.section1_left_search_bar} flex items-center mt-8 mb-16 pe-0`}>

              <Image src={Search} alt="Picture of the author" className={`${styles.search_icon} ms-3`} />
              <Image src={Line} alt="Picture of the author" className={`${styles.search_icon_line}`} />
              <input type="text" placeholder='Search for our stories' className={`${styles.search_input} outline-none`} />
              <button className={`${styles.search_button}`} style={{zIndex:'999'}}>Search</button>

            </div>
         

   
            <div className={`${styles.section1_left_ratings} flex items-center`}>

              <div className={`${styles.thumb_icon}  flex items-center justify-center me-3`}>
                <Image src={Thumb} alt="Picture of the author" />
              </div>
              <div className="text_4 ">
                <div className="text text-xs font-semibold">
                  We already have 100+ great stories
                </div>

                <div className="star  flex ">
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                </div>
              </div>
            </div>
          
       <div className="stripe_lines "style={{top: '56px', left: '360px', position: 'absolute' }} >
       <Image src={stripe_lines} alt="Your image" />
        </div>             
         
      
          </div>
    

          <div className="section1_right w-1/2 mt-10" >
            
            <Image
              src={Section1_right}
              alt="Picture of the author"
            />

          </div>
          {/* Section 1 right end */}
        </div>
        {/* Section 1 end  */}
      </div>
   
    </>
  );
}
