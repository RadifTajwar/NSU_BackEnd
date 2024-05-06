"use client"
import axios from 'axios'; // Import axios
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import facebook from '../../../public/Landing_Page_image/facebook.svg';
import github from '../../../public/Landing_Page_image/github.svg';
import google from '../../../public/Landing_Page_image/google.svg';
import hero_image from '../../../public/Landing_Page_image/hero.png';
import styles from './login.module.css';


export default function page() {
  interface FormData {
    email: string;
    password: string;
  
  }

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  setIsLoading(true); // Set loading state to true

  try {
    const response = await axios.post('http://localhost:5000/api/user/login', formData);
    console.log(response.data.id);
    const userType=response.data.userType;
    console.log(response.data.name);
    if (response.status === 200) {
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('userName', response.data.name);
      setErrorMessage('');
      router.push('/home');
      
      
      
      // Assuming successful submission, reset form data
      setFormData({
        email: '',
        password: ''
      });
    }
  } catch (error) {
    setErrorMessage('Invalid password or email ');
    console.log("Error submitting form" +error);
  } finally {
    setIsLoading(false); // Set loading state back to false
  }
};

  return (
    <>
      <div className={`${styles.login_page}`} >
        <div className="login flex justify-center  w-9/12 mx-auto " >

          <div className={` ${styles.form} flex justify-center items-center relative mt-10`}>




            <div className="form_texts py-10" style={{ width: '300px' }}>
              <h1 className="text-white font-inter text-3xl font-normal mb-3"
                style={{ lineHeight: "normal" }}> Login</h1>
              <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto ">
                <div className="mb-4">
                  <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Email</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Password</p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    placeholder="enter your password"
                    required
                  />
                </div>
                
                {errorMessage && <label className="block font-inter text-sm font-normal text-red-500">{errorMessage}</label>}
                <button type="submit" className={`${styles.sign_in_btn} btn  w-[300px] h-[36.972px] rounded-[10px]  flex justify-center items-center text-white font-inter text-s font-bold`} style={{ lineHeight: "normal" }}>
                    {isLoading ? 'Loading...' : 'Log In'}
                  </button>

              </form>

              <p className="text-white font-inter text-xs font-medium cursor-pointer"
                style={{ lineHeight: "normal" }}>Forget Password</p>


              <p className="text-white font-inter text-sm font-normal "
                style={{ lineHeight: "normal", textAlign: 'center' }}>or continue with</p>

              <div className="icons flex justify-between my-5">
                <div className="google w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
                  <Image src={google} alt='google' />
                </div>
                <div className="github w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
                  <Image src={github} alt='github' />
                </div>
                <div className="facebook w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
                  <Image src={facebook} alt='facebook' />
                </div>


              </div>

              <div className="last_text flex justify-between">
                <p className="text-white font-inter text-sm font-normal cursor-pointer"
                  style={{ lineHeight: "normal", textAlign: 'center' }}>Don't have an account?</p>
                <Link href="/signup">
                  <p className="text-white font-inter text-sm font-normal cursor-pointer"
                    style={{ lineHeight: "normal", textAlign: 'center' }}>Register for free</p>
                </Link>

              </div>
            </div>
            <div className="image absolute" style={{ top: '260px', left: '-280px', width: '350px' }}>
              <Image src={hero_image} alt='hero' />
            </div>


          </div>
        </div>
      </div>



    </>
  )

  }