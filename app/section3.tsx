import Image from "next/image";
import div_hover_img from '../public/Landing_Page_image/Section_3_div_hover_image.png';
import right_arrow from '../public/Landing_Page_image/right_arrow.svg';
import left_side from '../public/Landing_Page_image/section_2_left_side_line.png';
import right_side from '../public/Landing_Page_image/section_2_right_side_line.png';
import bg_1 from '../public/Landing_Page_image/section_3_1st_bg.png';
import icon_1 from '../public/Landing_Page_image/section_3_1st_icon.svg';
import bg_2 from '../public/Landing_Page_image/section_3_2nd_bg.png';
import icon_2 from '../public/Landing_Page_image/section_3_2nd_icon.svg';
import bg_3 from '../public/Landing_Page_image/section_3_3rd_bg.png';
import icon_3 from '../public/Landing_Page_image/section_3_3rd_icon.svg';
import contact_us_icon from '../public/Landing_Page_image/section_3_contact_us_icon.png';
import styles from './Section3.module.css';
export default function section3() {
    return (
        <>
            {/* section  offer start  */}
            <div className="offer mx-auto w-9/12 mb-10">

                {/* section 3 texts start  */}
                <div className="All_texts mb-10" style={{ textAlign: 'center' }}>


                    <div className="offer_text flex justify-between " style={{ textAlign: 'center', margin: '15px 355px' }}>
                        <div className="image_left flex items-center">

                            <Image src={right_side} alt='offer' />
                        </div>
                        <div className={`${styles.text_1}`}>What We Offer</div>
                        <div className="image_right flex items-center">
                            <Image src={left_side} alt='offer' />
                        </div>

                    </div>

                    <div className="remaining_text">
                        <div className={`${styles.text_2}`}>Lets Check Our Services</div>
                        <div className={`${styles.text_3}`}>From the best freelancer from all around the world to having your own office space,we've got you covered with all the necessary tools to help you and your business grow successful.</div>
                    </div>
                </div>
                {/* section 3 texts end  */}

                {/* section 3 offer div start  */}
                <div className="Offer_div flex justify-between">

                    {/* offer div 1 start  */}
                    <div className={`${styles.offer_div} flex items-center`} style={{ backgroundColor: 'rgba(252, 246, 240, 0.50)', position: 'relative', overflow: 'hidden' }}>
                        <div >

                            <div className="All_texts mb-10" style={{ textAlign: 'center' }}>


                                <div className="offer_text  relative">
                                    <div className="icon_bg relative">
                                        <Image src={bg_1} className={`${styles.bg_1}`} alt='offer' />
                                    </div>
                                    <div className="image_icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Image src={icon_1} alt='offer' />
                                    </div>
                                </div>



                                <div className="remaining_text mb-3">
                                    <div className={`${styles.Div_text_1} my-1`}>Market Analysis </div>
                                    <div className={`${styles.Div_text_2}`}>Explore our range of cost-effective
                                        outsourcing solutions tailored
                                        to your business needs.</div>
                                </div>

                                <div className="button flex justify-center ">
                                    <div className={`${styles.Div_btn_txt} me-2 `} style={{ borderBottom: '1px solid #FF930E', color: '#FF930E',zIndex:'999', cursor:'pointer' }}>
                                        Read More
                                    </div>
                                    <div className="Div_btn_right_arrow">
                                        <Image src={right_arrow} alt="right_arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image src={div_hover_img} className={`${styles.div_hover_img} z-0`} alt="Description of the image" layout="fill" objectFit="cover" style={{ top: '200px' }} />
                    </div>



                    {/* offer div 1 end  */}


                    {/* offer div 2 start  */}
                    <div className={`${styles.offer_div} flex items-center`} style={{ backgroundColor: 'rgba(241, 241, 241, 0.50)', position: 'relative', overflow: 'hidden' }}>
                        <div >

                            <div className="All_texts mb-10" style={{ textAlign: 'center' }}>


                                <div className="offer_text  relative">
                                    <div className="icon_bg relative">
                                        <Image src={bg_2} className={`${styles.bg_2}`} alt='offer' />
                                    </div>
                                    <div className="image_icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Image src={icon_2} alt='offer' />
                                    </div>
                                </div>



                                <div className="remaining_text mb-3">
                                    <div className={`${styles.Div_text_1} my-1`}>Market Analysis </div>
                                    <div className={`${styles.Div_text_2}`}>Explore our range of cost-effective
                                        outsourcing solutions tailored
                                        to your business needs.</div>
                                </div>

                                <div className="button flex justify-center ">
                                    <div className={`${styles.Div_btn_txt} me-2 `} style={{ borderBottom: '1px solid #5A49F8', color: '#5A49F8' ,zIndex:'999', cursor:'pointer' }}>
                                        Read More
                                    </div>
                                    <div className="Div_btn_right_arrow">
                                        <Image src={right_arrow} alt="right_arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image src={div_hover_img} className={`${styles.div_hover_img} z-0`} alt="Description of the image" layout="fill" objectFit="cover" style={{ top: '200px' }} />
                    </div>



                    {/* offer div 2 end  */}

                    {/* offer div 3 start  */}


                    <div className={`${styles.offer_div} flex items-center`} style={{ backgroundColor: 'rgba(237, 247, 241, 0.50)', position: 'relative', overflow: 'hidden' }}>
                        <div className="All_texts mb-10" style={{ textAlign: 'center' }}>


                            <div className="offer_text  relative">
                                <div className="icon_bg relative">
                                    <Image src={bg_3} className={`${styles.bg_3}`} alt='offer' />
                                </div>
                                <div className="image_icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Image src={icon_3} alt='offer' />
                                </div>
                            </div>



                            <div className="remaining_text mb-3">
                                <div className={`${styles.Div_text_1} my-3`}>Market Analysis </div>
                                <div className={`${styles.Div_text_2}`}>Explore our range of cost-effective
                                    outsourcing solutions tailored
                                    to your business needs.</div>

                            </div>
                            <div className="button flex justify-center ">
                                <div className={`${styles.Div_btn_txt} me-2 `} style={{ borderBottom: '1px solid #18DA59', color: '#18DA59' ,zIndex:'999', cursor:'pointer' }}>
                                    Read More
                                </div>
                                <div className="Div_btn_right_arrow">
                                    <Image src={right_arrow} alt="right_arrow" />
                                </div>
                            </div>

                        </div>
                        <Image src={div_hover_img} className={`${styles.div_hover_img} z-0`} alt="Description of the image" layout="fill" objectFit="cover" style={{ top: '200px' }} />

                        <div  >

                        </div>
                    </div>

                    {/* offer div 3 end  */}
                </div>

                {/* section 3 offer div end  */}

                {/* section 3 contact us start  */}
                <div className="contact_us flex justify-center items-center my-10">
                    <Image src={contact_us_icon} alt="contact_us" />
                    <p className="mx-2" style={{ color: '#686868', fontSize: '20px', fontWeight: '500' }}>Hey! Need Any Service? Just </p>
                    <p style={{ color: '#6820E4', fontSize: '20px', fontWeight: '500' }}> Contact Us</p>
                </div>
                {/* section 3 contact us end  */}
            </div >
            {/* section 3 offer end  */}

        </>
    )
}
