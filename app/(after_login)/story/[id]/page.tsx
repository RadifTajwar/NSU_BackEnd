"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePageContext } from '../context/PageContext';
export default function page({ params }) {
  const [fileContent, setFileContent] = useState('');
  const router = useRouter();
  const { pageTitle, pageNumber, setPage } = usePageContext();
  const { id } = params;

  const title = localStorage.getItem('pageTitle');
  const length = localStorage.getItem('length');
  console.log(length);
  useEffect(() => {
    const fetchFileContent = async () => {

      try {
        
        setPage(title,id);
        const response = await axios.post('http://localhost:5000/api/story/lines', {
          title: title,
          id: id
        });
    
        const content = response.data.fileContent;
        setFileContent(content)
        
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };

    fetchFileContent();
  }, []);
 
  
  // console.log(pageTitle,"asdfasdf",id);
  const handleNextButtonClick = () => {
    const nextId = parseInt(id, 10) + 1;
    console.log(nextId);
    const len = parseInt(length,10);
    if(nextId<len){
      router.push(`/story/${nextId}`);
      setPage(pageTitle,nextId)
    }
    
  };

  const handlePrevButtonClick = () => {
    
    const prevId = parseInt(id, 10) - 1;
    if(prevId>=0){
      console.log(prevId);
      router.push(`/story/${prevId}`);
      setPage(pageTitle,prevId)
    }
    
  }
  console.log(typeof id); 
  console.log(typeof pageNumber); 
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen">
        <Image
          src={`/story/user/${pageTitle}/images/${id}.png`}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100} // Adjust quality as needed
        />
      </div>
      <div className="absolute m-12 rounded-md bg-gray-900 text-white bg-opacity-50 text-left left-12 max-w-sm">
        <button
          type="button"
          phx-click="edit-page"
          phx-value-page="90f1d716-fbba-483c-a6ba-f2b10bbcceb7"
          phx-target="#page-0"
          className="group hover:cursor-pointer hover:bg-zinc-500 hover:bg-opacity-10"
        >
          <p className="whitespace-line py-8 px-6 first-letter:text-5xl first-letter:font-extrabold">
            {fileContent}
          </p>
        </button>

        <div className="flex">
          <div className="mx-auto my-4" data-phx-id="c4-phx-F8yYLI5PnoY2P20y" data-phx-component="4" id="audio-component">
            <div>
              <div id="audio-playing" className="mx-auto my-4 text-right">
                {/* Audio Controller */}
                <audio id="audio-90f1d716-fbba-483c-a6ba-f2b10bbcceb7" controls className="">
                  <source
                    id="94a0d2ec-fa5f-4f42-8bf6-8b58970c3ca5"
                    src={`/story/user/${title}/speeches/${id}.wav`}
                    type="audio/mpeg"
                  />

                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        id != (parseInt(length,10)-1) && (
          <>
          <button
        id="next-page-1"
        type="button"
        onClick={handleNextButtonClick}
        className="hover:cursor-alias absolute hover:bg-gray-100 flex items-center hover:text-gray-600 text-gray-700 border-2 border-gray-300 shadow-sm group bg-white px-4 py-3 rounded-full z-50 top-1/2 -mt-12 right-6"
      >
        Next 
        <svg
          className="inline-flex mt-0.5 ml-2 -mr-1 stroke-gray-600 stroke-1"
          fill="none"
          width="30"
          height="30"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
          <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
        </svg>
      </button>
          </>
        )
      }
     

      {
        id!='0' && (
          <>
           <button
        id="prev-page-1"
        type="button"
        onClick={handlePrevButtonClick}
        className="hover:cursor-alias absolute hover:bg-gray-100 flex items-center hover:text-gray-600 text-gray-700 border-2 border-gray-300 shadow-sm group bg-white px-4 py-3 rounded-full z-50 top-1/2 -mt-12 left-6"
      >

        <svg className="mt-0.5 mr-2 -ml-1 stroke-gray-600 rotate-180 stroke-1" fill="none" width="30" height="30" viewBox="0 0 10 10" aria-hidden="true">
          <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
          <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
        </svg>
        Prev 
      </button>
          </>
        )
      }
     
    </>
  )
}
