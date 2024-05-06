import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface VoiceGenerateProps {
    index: number;
    line: string;
    title:string;
    story: string[];
}


const storyGenerate: React.FC<VoiceGenerateProps> = ({ index, line,title,story }) => {

    const [percentage,setPercentage]=useState(0);
    console.log(line);
    console.log("we entered story generate  ${} ")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    story:story,
                    text: line,
                    id: index,
                    title: title
                };
                const response =await axios.post('http://localhost:5000/api/generate/images', requestBody);
                const status=response.data.success;
                if(status=='200'){
                        setPercentage(100);
                } // Set percentage to 100 after successful axios call
            } catch (error) {
                console.error('Error sending POST request:', error);
            }
        };
    
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    


    return (
        <>
            <div>
                <div className="flex justify-between mb-1 font-medium text-xs text-gray-500">
                    <span className="">Page {index + 1}</span>
                    <span className="">{percentage}%</span>
                </div>
                <div className="w-full h-3 bg-indigo-300 bg-opacity-50 rounded-full">
                    <div className="h-3 rounded-full bg-indigo-600" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        </>
    );
};

export default storyGenerate;
