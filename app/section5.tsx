import Image from 'next/image'
import right_arrow from '../public/Landing_Page_image/right_arrow.svg'
import right_side from '../public/Landing_Page_image/section_2_right_side_line.png'
import section_5_left from '../public/Landing_Page_image/section_5_left.png'
import section_5_right from '../public/Landing_Page_image/section_5_right.png'
import styles from './Section5.module.css'
export default function section5() {
    return (
        <>
            {/* section  5 start  */}
            <div className="offer mx-auto w-9/12 mb-10">
                <div className="section_5 flex items-end">
                    <div className="section_5_left w-1/2">
                        <Image src={section_5_left} alt='ssection_5_left' />
                    </div>

                    <div className="All_texts  section_5_right w-1/2" style={{ textAlign: 'left' }}>
                        <div className="offer_text flex  " >
                            <div className="image_left flex items-center me-3">

                                <Image src={right_side} alt='offer' />
                            </div>
                            <div className="text-green-500 font-inter font-bold text-xl leading-9 tracking-wider" style={{ fontSize: '24px' }}>Marketing Strategy</div>

                        </div>

                        <div className="remaining_text">
                            <div className="text-black font-inter font-extrabold text-2xl leading-9 tracking-wider my-3 " style={{ fontSize: '32px', lineHeight: '150%', letterSpacing: '1.28px', marginRight: '130px' }}>Get Maximum Customer of any Business</div>
                            <div style={{
                                color: "#000",
                                fontSize: "15px",
                                fontWeight: 500,
                                lineHeight: "165%",
                                letterSpacing: "0.9px",
                                textAlign: 'justify'
                            }}>Authoritatively simplify economically sound interfaces morevia market-
                                driven total linkage. Energistically engage out-of-the-box e-tailers that
                                rather than distributed processes. Holisticly supply next-of generation
                                information via fully researched relationships. Competently service our
                                conceptualize multidisciplinar convergence via prospective methods
                                empowerment. Continually deploy world-class sources</div>


                            <div className={`${styles.button}  flex items-center justify-center mt-5`} style={{ width: '154px', height: '50px', background: 'linear-gradient(to right, #16C174, #2CC117)', borderRadius: '15px' }}>
                                <button className='me-2' style={{
                                    color: "#FFF",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    lineHeight: "150%",
                                }}>Learn More  </button>
                                <Image src={right_arrow} alt='right_arrow' />
                            </div>

                        </div>
                    </div>
                </div>








            </div>
            <div className="offer mx-auto w-9/12 mb-10">
                <div className="section_5 flex items-end">
                    
                    <div className="All_texts  section_5_right w-1/2" style={{ textAlign: 'left' }}>
                        <div className="offer_text flex  " >
                            <div className="image_left flex items-center me-3">

                                <Image src={right_side} alt='offer' />
                            </div>
                            <div className="text-green-500 font-inter font-bold text-xl leading-9 tracking-wider" style={{ fontSize: '24px' }}>Marketing Strategy</div>

                        </div>

                        <div className="remaining_text">
                            <div className="text-black font-inter font-extrabold text-2xl leading-9 tracking-wider my-3 " style={{ fontSize: '32px', lineHeight: '150%', letterSpacing: '1.28px', marginRight: '130px' }}>Get Maximum Customer of any Business</div>
                            <div style={{
                                color: "#000",
                                fontSize: "15px",
                                fontWeight: 500,
                                lineHeight: "165%",
                                letterSpacing: "0.9px",
                                marginRight:'10px',
                                textAlign: 'justify'
                            }}>Authoritatively simplify economically sound interfaces morevia market-
                                driven total linkage. Energistically engage out-of-the-box e-tailers that
                                rather than distributed processes. Holisticly supply next-of generation
                                information via fully researched relationships. Competently service our
                                conceptualize multidisciplinar convergence via prospective methods
                                empowerment. Continually deploy world-class sources</div>


                            <div className={`${styles.button}  flex items-center justify-center mt-5`} style={{ width: '154px', height: '50px', background: 'linear-gradient(to right, #16C174, #2CC117)', borderRadius: '15px' }}>
                                <button className='me-2' style={{
                                    color: "#FFF",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    lineHeight: "150%"
                                    
                                }}>Learn More  </button>
                                <Image src={right_arrow} alt='right_arrow' />
                            </div>

                        </div>
                    </div>
                    <div className="section_5_left w-1/2 flex justify-end ">
                        <Image src={section_5_right} alt='ssection_5_left' />
                    </div>
                </div>








            </div>
        </>
    )
}
