import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Analytics from './Analytics/Analytics';

const UrlTable = () => {
    const [links, setLinks] = useState([]);
    const navigate = useNavigate();
    // Function to limit the length of the link
    const limitLinkLength = (link, maxLength) => {
        if (link.length > maxLength) {
            // Trim the link and append ellipsis (...) to indicate truncation
            return link.substring(0, maxLength - 3) + '...';
        }
        return link;
    };
    const accessToken = localStorage.getItem('accessToken')
    useEffect(() => {
        const fetchlinks = ()=>{
            axios
              .get("https://url-shortner-backend-teal.vercel.app/api/user/", {
                  headers:{
                      'Authorization': `${accessToken}`
                  }
              })
              .then(links => {setLinks(links.data)
              })
              .catch(err => console.error(err));
        
        }
        setTimeout(()=>{
            fetchlinks();
        }, 400)

    }, [links]);

    const handleAnalyticsShow = (shortUrl)=>{
        // navigate(<Analytics visitedHistory={visitedHistory}/>)
        const shortId = shortUrl.split('/')[3]
        navigate(`/analytics/${shortId}`)
        // visitedHistory.forEach(timestamp => {
        //     const date = new Date(timestamp.timestamps)
        //     const day = date.toISOString().split('T')[0]
        //     console.log(day)
        // });
        // console.log("Total no. of clicks on this link is : ", visitedHistory.length)
    }

    return (
        <div className="mx-[5%]">
            {links.map((link, index) =>(

            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0 border-cyan-200">
                <div className="overflow-hidden">
                    <div className="text-1xl text-teal-200 hover:text-teal-300"><a href={link.shortUrl} target='_blank'>{link.shortUrl}</a></div>
                    <div className="opacity-70">{limitLinkLength(`${link.redirectedUrl}`, 34)}</div>
                    <div className="text-[1rem]"><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span className="">{(link.createdAt).split('T')[0]}</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="hover:text-cyan-500" >Share Access</button>
                    <button className="hover:text-cyan-500" onClick={()=>{
                        const shortId = link.shortUrl.split('/')[3]
                        navigate(`/analytics/${shortId}`)
                    }}>View Analytics</button>
                    <div className="flex gap-3 ">
                        <button className="hover:text-green-400" onClick={()=> {
                            window.navigator.clipboard.writeText(link.shortUrl)
                        }}><span className="m-1 "><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        {/* <button className="hover:text-green-400"><span className="m-1"><i title="Edit" class="fa-solid fa-pencil"></i></span></button> */}
                        <button className="hover:text-red-500" onClick={()=> {axios
                          .delete(`${link.shortUrl}`)
                          .catch(err => console.error(err))
                        }
                          }><span className="m-1"><i title="Delete" class="fa-solid fa-trash"></i></span></button>
                    </div>

                </div>
            </div>
            ))}

        </div>
    )
}

export default UrlTable;