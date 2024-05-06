import { kavoon } from './ui/fonts';

import styles from './Section2.module.css';
export default function section2() {
    return (
        <>
            {/* Section 2 start */}
            <div className="section2 mx-auto w-9/12  justify-center mt-10" style={{width:'620px'}}>
                {/* section 2 texts start */}
                <div className={`${styles.text}`}>
                    <div className={`${styles.text_1}`} >
                        How do we work
                    </div>
                    <div className={`${styles.text_2} ${kavoon.className}`}>
                        We Are Offering A solution To
                        Your Business Needs
                    </div>
                    <div className={`${styles.text_3} mx-8`}>
                        From the best freelancer from all around the world to having your own
                        office space,we've got you covered with all the necessary tools to help
                        you and your business grow successful.
                    </div>
                </div>

                {/* section 2 texts end  */}

                {/* section 2 counter start */}

                <div className="counter flex justify-between mb-14">
                    <div className={`${styles.counter_1}  flex justify-center items-center`}>
                        <div className="counter_texts">
                        <h1 style={{textAlign:'center',fontSize:'48px',height:'60px'}} className='font-bold p-0 m-0'>513</h1>
                        <p style={{textAlign:'center'}}>Registered Users</p>
                        </div>
                      
                    </div>
                    <div className={`${styles.counter_1}  flex justify-center items-center`}>
                        <div className="counter_texts">
                        <h1 style={{textAlign:'center',fontSize:'48px',height:'60px'}} className='font-bold p-0 m-0'>87</h1>
                        <p style={{textAlign:'center'}}>Completed Tasks</p>
                        </div>
                      
                    </div>
                    <div className={`${styles.counter_1}  flex justify-center items-center`}>
                        <div className="counter_texts">
                        <h1 style={{textAlign:'center',fontSize:'48px',height:'60px'}} className='font-bold p-0 m-0'>75</h1>
                        <p style={{textAlign:'center'}}>Happy Clients</p>
                        </div>
                      
                    </div>
                </div>
                {/* section 2 counter end  */}

                
            </div>
            {/* Section 2 end  */}
        </>
    )
}
