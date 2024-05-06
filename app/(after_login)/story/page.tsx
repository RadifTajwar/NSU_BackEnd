"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePageContext } from './context/PageContext';
export default function page() {

  const { pageTitle, pageNumber, setPage } = usePageContext();

  

  useEffect(() => {
    const fetchFileContent = () => {
      const title = localStorage.getItem('pageTitle');
      const length = localStorage.getItem('length');
      setPage(title, 0, length);

    };

    fetchFileContent();
  }, []);


  return (
    <>

      <div className="mx-auto h-full">


        {/* <div id="disconnected" role="alert" className="fixed  top-2 right-2 w-80 sm:w-96 z-50 rounded-lg p-3 shadow-md shadow-zinc-900/5 ring-1 bg-rose-50 text-rose-900 ring-rose-500 fill-rose-900 transition-all transform ease-in duration-300 duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
        <p className="flex items-center gap-1.5 text-[0.8125rem] font-semibold leading-6">
          <span className="hero-exclamation-circle-mini w-4 h-4"></span>
          We can't find the internet
        </p>
        <p className="mt-2 text-[0.8125rem] leading-5">Attempting to reconnect <span className="hero-arrow-path ml-1 w-3 h-3 animate-spin"></span></p>
      </div> */}

        <div className="font-script text-3xl text-black">
          <div id="get-supporter" phx-hook="GetSupporter">
            <div id="start"></div>

            <div data-phx-component="1" id="298086e0-3dc9-450c-94dc-92172d281c01" className="">
              <div className="h-screen">
                <div className="absolute h-full w-full opacity-50 brightness-50 flex" >
                  <Image
                    src={`/story/user/${pageTitle}/images/${pageNumber}.png`} 
                 
                   alt={pageTitle}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0"
                  />
                  
                </div>

                <div className="pt-36">
                  <Link href={`/story/${pageNumber}`}>

                    <div className="book relative hover:rotate-0 flex justify-center">
                      <Image className=" w-[400px] h-[500px] transform translate-z-0 border-md rounded-lg brightness-75" style={{ transform: 'translateZ(25px)' }} alt={pageTitle} src={`/story/user/${pageTitle}/images/${pageNumber}.png`} width="400" height="500" />
                      <div style={{ transform: 'translateZ(25px)' }} className="absolute text-white w-[400px] h-[500px] z-50 text-center mt-16">
                        <h1 className="px-8 mt-10">{pageTitle}</h1>

                      </div>
                    </div>

                  </Link>



                </div>

                <div className="text-center relative z-20  text-white">
                  <p><span className="hero-arrow-long-up h-4 w-4 inline-block"></span></p>
                  <p>Click to read your story!</p>
                </div>
              </div>
            </div>

            <div id="end"></div>
          </div>
        </div>
      </div>

    </>
  );
}
