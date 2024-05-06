import Image from 'next/image'
import icon_1 from '../public/Landing_Page_image/section_4_div_1_icon.png'
import icon_2 from '../public/Landing_Page_image/section_4_div_2_icon.png'
import icon_3 from '../public/Landing_Page_image/section_4_div_3_icon.png'
import styles from './Section4.module.css'
export default function section4() {
    return (
        <>
        
            <div className="section3 flex items-center justify-center mb-10" style={{
                backgroundImage: 'url("/Landing_Page_image/section_4_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', width: '1519px',
                height: '629.5px'
            }}>
                <div className="Divs flex justify-between mx-auto w-9/12">
                    <div className={`${styles.div_1} flex items-center `}>
                        <div className="icon mx-5" style={{ width: '80px', height: '80px' }}>
                            <Image src={icon_1} alt="icon_1" width={35} />

                        </div>
                        <div className="texts">
                            <p className="text-black font-inter font-semibold text-28 leading-42 tracking-wider" style={{ lineHeight: '150%', fontSize: '28px' ,marginBottom:'10px'}}>Research</p>
                            <p className="text-gray-600 font-kozuka text-base font-normal leading-24 tracking-wide" style={{ lineHeight: '150%' }}>Proactively unleash end ends
                                relationships through cross
                                in initiative services.
                            </p>
                        </div>
                        
                    </div>

                    
                    <div className={`${styles.div_1} flex items-center `}>
                        <div className="icon mx-5" style={{ width: '130px', height: '70px' }}>
                            <Image src={icon_2} alt="icon_1"  />

                        </div>
                        <div className="texts">
                            <p className="text-black font-inter font-semibold text-28 leading-42 tracking-wider" style={{ lineHeight: '150%', fontSize: '28px' ,marginBottom:'10px'}}>Development</p>
                            <p className="text-gray-600 font-kozuka text-base font-normal leading-24 tracking-wide" style={{ lineHeight: '150%' }}>Proactively unleash end ends
                                relationships through cross
                                in initiative services.
                            </p>
                        </div>
                        
                    </div>
                    <div className={`${styles.div_1} flex items-center `}>
                        <div className="icon mx-5" style={{ width: '130px', height: '70px' }}>
                            <Image src={icon_3} alt="icon_1" />

                        </div>
                        <div className="texts">
                            <p className="text-black font-inter font-semibold text-28 leading-42 tracking-wider" style={{ lineHeight: '150%', fontSize: '28px' ,marginBottom:'10px'}}>Live Demo</p>
                            <p className="text-gray-600 font-kozuka text-base font-normal leading-24 tracking-wide" style={{ lineHeight: '150%' }}>Proactively unleash end ends
                                relationships through cross
                                in initiative services.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>
            
        </>
    )
}
