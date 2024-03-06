import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UrlTextBox({
    isLinkhidden = false,
    onShortUrlRecieved,
}) {
    const [url, setUrl] = useState("www.google.com")
    const [isLoading, setIsLoading] = useState(true)
    const accessToken = localStorage.getItem('accessToken')
    const [pid, setPid] = useState(null)
    const [buttonClick, setButtonClick] = useState(0)
    let PID = null
    useEffect(() => {
        const fun = async () => {
            if (accessToken) {
                try {
                    const response = await axios.post(
                        'https://url-shortner-backend-teal.vercel.app/workspace',
                        {
                            original_url: url,
                        },
                        {
                            headers: {
                                Authorization: `${accessToken}`
                            }
                        }
                    );
                    if (response.data.pid) {
                        PID = response.data.pid
                        console.log("PID: ", PID)
                        setPid(PID);
                    } else {
                        setPid(null);
                    }
                } catch (error) {
                    setPid(null);
                }
            }
            else {
                setPid(null);
            }
            setIsLoading(false)
        };
        fun();
    }, [accessToken, url])


    const handleShortenClick = () => {
        const newUrl = {
            original_url: url,
        }
        console.log(newUrl.original_url, "IS THE PERSON ID")
        fetch('http://127.0.0.1:8000/shorten', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            ,
            body: JSON.stringify(newUrl),
        }).then(res => res.json())
            .then((res) => {
                const recievedShortUrl = res.shortened_url;
                console.log(recievedShortUrl);
            })
            .catch(error => {
                window.alert(error);
                return;
            })
            setButtonClick(e => e+1)
    }

    if (isLoading) {
        return <div>Loading...</div>
    }



    return (
        <div className="w-1/2 h-[76px] relative flex justify-end">

            <div className="w-1/4 h-[60px] pl-[25px] pr-[25.05px] py-[21px] mt-2 bg-blue-700 rounded-[48px] shadow border border-blue-700 justify-center items-center inline-flex">
                <button className="text-center text-white text-base font-semibold font-['Inter'] leading-[18px]" onClick={handleShortenClick}>Shorten Now!</button>
            </div>
            <div className="w-3/4 h-[76px] pl-[25px] pr-[25.19px] py-[14px] left-0 top-0 absolute bg-gray-900 rounded-[48px] shadow border-4 border-blue-700 border-opacity-10 justify-start items-center inline-flex">
                <div className="w-full justify-center items-center gap-5 flex">
                    <div className="text-center text-gray-300 text-xl font-light font-['Font Awesome 6 Pro'] leading-7" hidden={isLinkhidden}>link</div>
                    <div className="w-full justify-start items-center gap-[5px] flex">
                        <input className="w-full text-gray-300 border-none bg-transparent select-none bg-gray-900 rounded-[48px] text-base font-light font-['Inter'] leading-7 " type="text" name='linkInput' placeholder='https://www.google.com' style={{ outline: "none" }} onChange={e => setUrl(e.target.value)} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UrlTextBox
