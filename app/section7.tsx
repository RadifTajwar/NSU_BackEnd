import Image from 'next/image'
import calander from '../public/Landing_Page_image/calander.svg'
import profile from '../public/Landing_Page_image/profile.svg'
import right_arrow from '../public/Landing_Page_image/right_arrow.svg'
import clips from '../public/Landing_Page_image/section_7_clips.svg'
import styles from './Section7.module.css'
export default function section7() {
    return (
        <>
            <div className="section_7 flex w-9/12 mx-auto justify-between my-16">
                <div className={`${styles.Div_1} hover:transition duration-500 ease-in-out`} style={{ width: '336px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }} >
                    <div className="div_1_img" >

                        <div className=" h-64 flex justify-center" style={{
                            backgroundImage: "url('/Landing_Page_image/section_7_div_1.png')",
                            backgroundSize: "cover",

                            width: '336px',
                            height: '250px'
                        }}>

                            <div className={` ${styles.hover_div} h-full   flex justify-center items-center `} style={{ width: '0px' }}>
                                <div className={`${styles.clips_bg} flex justify-center items-center`} style={{ width: '1px', backgroundColor: 'white', height: '1px', borderRadius: '15px' }}>
                                    <Image src={clips} alt='clips' width={1} className={`${styles.clips}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-center">


                        <div className="icon_text flex justify-between w-11/12 py-5 border-b border-black" >
                            <div className="profile flex justify-center items-center ">
                                <Image src={profile} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Stephen Gilbert</p>
                            </div>
                            <div className="calander flex justify-center items-center">
                                <Image src={calander} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Jan 25, 2025</p>
                            </div>
                        </div>

                    </div>
                    <div className="remaining_text flex justify-center">
                        <div className="texts w-11/12 py-5">


                            <h1 className={`${styles.text}`} style={{ color: '#2D2D2D', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '150%', marginRight: '50px' }}>What Audience Wants From Your Engagement</h1>
                            <p className={`${styles.text} my-3`} style={{ color: '#686868', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: '150%', marginRight: '40px' }}>Access a global pool of talented agents
                                at competitive rates.</p>
                            <div className='button'>
                                <button className={`${styles.read_more} me-1`} style={{
                                    color: '#5A49F8',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '150%'
                                }}>Read More</button>
                                <Image src={right_arrow} alt='btn' />
                            </div>
                        </div>
                    </div>

                </div>



                <div className={`${styles.Div_1} hover:transition duration-500 ease-in-out`} style={{ width: '336px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }} >
                    <div className="div_1_img" >

                        <div className=" h-64  flex justify-center" style={{
                            backgroundImage: "url('/Landing_Page_image/section_7_div_2.png')",
                            backgroundSize: "cover",

                            width: '336px',
                            height: '250px'
                        }}>

                            <div className={` ${styles.hover_div} h-full   flex justify-center items-center `} style={{ width: '0px' }}>
                                <div className={`${styles.clips_bg} flex justify-center items-center`} style={{ width: '1px', backgroundColor: 'white', height: '1px', borderRadius: '15px' }}>
                                    <Image src={clips} alt='clips' width={1} className={`${styles.clips}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-center">


                        <div className="icon_text flex justify-between w-11/12 py-5 border-b border-black" >
                            <div className="profile flex justify-center items-center ">
                                <Image src={profile} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Stephen Gilbert</p>
                            </div>
                            <div className="calander flex justify-center items-center">
                                <Image src={calander} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Jan 25, 2025</p>
                            </div>
                        </div>

                    </div>
                    <div className="remaining_text flex justify-center">
                        <div className="texts w-11/12 py-5">


                            <h1 className={`${styles.text}`} style={{ color: '#2D2D2D', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '150%', marginRight: '50px' }}>What Audience Wants From Your Engagement</h1>
                            <p className={`${styles.text} my-3`} style={{ color: '#686868', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: '150%', marginRight: '40px' }}>Access a global pool of talented agents
                                at competitive rates.</p>

                            <div className='button'>
                                <button className={`${styles.read_more} me-1`} style={{
                                    color: '#5A49F8',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '150%'
                                }}>Read More</button>
                                <Image src={right_arrow} alt='btn' />
                            </div>

                        </div>
                    </div>

                </div>
                <div className={`${styles.Div_1} hover:transition duration-500 ease-in-out`} style={{ width: '336px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }} >
                    <div className="div_1_img" >

                        <div className=" h-64  flex justify-center" style={{
                            backgroundImage: "url('/Landing_Page_image/section_7_div_3.png')",
                            backgroundSize: "cover",

                            width: '336px',
                            height: '250px'
                        }}>

                            <div className={` ${styles.hover_div} h-full   flex justify-center items-center `} style={{ width: '0px' }}>
                                <div className={`${styles.clips_bg} flex justify-center items-center`} style={{ width: '1px', backgroundColor: 'white', height: '1px', borderRadius: '15px' }}>
                                    <Image src={clips} alt='clips' width={1} className={`${styles.clips}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-center">


                        <div className="icon_text flex justify-between w-11/12 py-5 border-b border-black" >
                            <div className="profile flex justify-center items-center ">
                                <Image src={profile} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Stephen Gilbert</p>
                            </div>
                            <div className="calander flex justify-center items-center">
                                <Image src={calander} alt='profile' />
                                <p className={`${styles.text}`} style={{ color: '#686868', fontSize: '13px', fontStyle: 'normal', fontWeight: 800, lineHeight: '150%', marginLeft: '5px' }}>Jan 25, 2025</p>
                            </div>
                        </div>

                    </div>
                    <div className="remaining_text flex justify-center">
                        <div className="texts w-11/12 py-5">


                            <h1 className={`${styles.text}`} style={{ color: '#2D2D2D', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '150%', marginRight: '50px' }}>What Audience Wants From Your Engagement</h1>
                            <p className={`${styles.text} my-3`} style={{ color: '#686868', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: '150%', marginRight: '40px' }}>Access a global pool of talented agents
                                at competitive rates.</p>

                            <div className='button'>
                                <button className={`${styles.read_more} me-1`} style={{
                                    color: '#5A49F8',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '150%'
                                }}>Read More</button>
                                <Image src={right_arrow} alt='btn' />
                            </div>


                        </div>
                    </div>

                </div>
            </div >


        </>
    )
}
