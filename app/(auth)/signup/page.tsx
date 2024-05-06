
"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import facebook from '../../../public/Landing_Page_image/facebook.svg';
import github from '../../../public/Landing_Page_image/github.svg';
import google from '../../../public/Landing_Page_image/google.svg';
import hero from '../../../public/Landing_Page_image/section_1_right.png';
import styles from './signup.module.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string | null;
  userType: string;
}

export default function SignUpPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Data, setData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
    userType: 'agent'
  });

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        if (fileReader.result) {
          resolve(fileReader.result.toString());
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = async (files: FileList | null): Promise<void> => {
    if (files && files[0]) {
      const base64 = await convertBase64(files[0]);
      setData({
        ...Data,
        image: base64
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
      
    if (Data.password === Data.confirmPassword) {
      setIsLoading(true); // Set loading state to true

      try {
        const response = await axios.post('http://localhost:5000/api/user/signup', Data);
        console.log(response.status);
        if (response.status === 201) {
          // Assuming successful submission, navigate to login page
          router.push('/login');
          setData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            image: null,
            userType: 'agent'
          })
        }
      } catch (error) {
        
          setErrorMessage('Email already exists');
        
      } finally {
        setIsLoading(false); // Set loading state back to false
      }
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  




  return (
    <>
      <div className={`${styles.signup_page} flex justify-center `} >
        <div className="signUp_section w-9/12  flex mt-2 justify-between">
          <div className="left w-7/12">
            <Image src={hero} alt='hero' width={600} />
          </div>
          <div className="right w-5/12">
            <div className={` ${styles.form} flex justify-center items-center relative `}>




              <div className="form_texts py-10" style={{ width: '300px' }}>






                <h1 className="text-white font-inter text-3xl font-normal" style={{ lineHeight: "normal" }}> Sign Up</h1>


                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto ">
                  <div className="email my-3">
                    <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Name</p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={Data.name}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm "
                      placeholder="enter name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Email</p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={Data.email}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                      placeholder="enter email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-inter text-sm font-semibold mb-2" style={{ lineHeight: "normal" }}>Upload Profile Picture</p>
                    <input
                      type="file"
                      id="profilePicture"
                      name="profilePicture"
                      accept="image/*"
                      onChange={(event) => {
                        handleImageChange(event.target.files);
                      }}
                      required
                      className="text-white "

                    />
                  </div>

                  {/* <div className="mb-4 flex items-center">
                    <label className="text-white font-inter text-sm font-semibold me-5" style={{ lineHeight: "normal" }}>Sign up as:</label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="agent"
                        name="userType"
                        value="agent"
                        checked={Data.userType === 'agent'}
                        onChange={handleChange}
                        className="mr-2"

                      />
                      <label htmlFor="agent" className="text-white mr-4">Agent</label>
                      <input
                        type="radio"
                        id="company"
                        name="userType"
                        value="company"
                        checked={Data.userType === 'company'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="company" className="text-white">Company</label>
                    </div>
                  </div> */}
                  <div className="mb-4">
                    <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Password</p>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={Data.password}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                      placeholder="enter password"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <p className="text-white font-inter text-sm font-semibold " style={{ lineHeight: "normal" }}>Confirm Password</p>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={Data.confirmPassword}
                      onChange={handleChange}
                      className={'shadow appearance-none border rounded-xl w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'}
                      placeholder="confirm password"
                      required
                    />
                  </div>
                  {errorMessage && <label className="block font-inter text-sm font-normal text-red-500">{errorMessage}</label>}
                  <button type="submit" className={`${styles.sign_in_btn} btn  w-[300px] h-[36.972px] rounded-[10px]  flex justify-center items-center text-white font-inter text-s font-bold`} style={{ lineHeight: "normal" }}>
                    {isLoading ? 'Loading...' : 'Sign Up'}
                  </button>
                </form>


                <p className="text-white font-inter text-xs font-medium cursor-pointer" style={{ lineHeight: "normal" }}>Forget Password</p>
                <p className="text-white font-inter text-sm font-normal " style={{ lineHeight: "normal", textAlign: 'center' }}>or continue with</p>


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
                  <p className="text-white font-inter text-sm font-normal cursor-pointer" style={{ lineHeight: "normal", textAlign: 'center' }}>Already have an account?</p>
                  <Link href="/login">
                    <p className="text-white font-inter text-sm font-normal cursor-pointer" style={{ lineHeight: "normal", textAlign: 'center' }}>Log in here</p>
                  </Link>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>


    </>
  )
}
