import Image from 'next/image'
import left_side from '../public/Landing_Page_image/section_2_left_side_line.png'
import right_side from '../public/Landing_Page_image/section_2_right_side_line.png'
import styles from './Section6.module.css'
export default function section6() {
    return (
        <>
            <div className="section_6 pt-5" style={{
                backgroundImage: 'url("/Landing_Page_image/section_6_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', width: '1519px',
                height: '844px'
            }}>

                <div className="section_6_texts mx-auto w-9/12 mt-8">
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
                </div>

            </div>
        </>
    )
}
