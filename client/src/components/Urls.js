const Urls = () => {

    // Function to limit the length of the link
    const limitLinkLength = (link, maxLength) => {
        if (link.length > maxLength) {
            // Trim the link and append ellipsis (...) to indicate truncation
            return link.substring(0, maxLength - 3) + '...';
        }
        return link;
    };

    return (
        <div className="mx-[5%]">


            

            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0">
                <div className="overflow-hidden">
                    <div className="text-2xl hover:underline"><a href="/">https://www.slinkly.in</a></div>
                    <div className="opacity-50 hover:underline"><a href="/">{limitLinkLength("https://www.youtube.com/watch?v=H9M02of22z4&t=111s", 34)}</a></div>
                    <div className="text-[1rem]"><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span className="">23-01-2024</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="hover:text-cyan-500" >Share Access</button>
                    <button className="hover:text-cyan-500">View Analytics</button>
                    <div className="flex gap-3 ">

                        <button className="hover:text-cyan-500"><span className="m-1 "><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        <button className="hover:text-green-400"><span className="m-1"><i title="Edit" class="fa-solid fa-pencil"></i></span></button>
                        <button className="hover:text-red-500"><span className="m-1"><i title="Delete" class="fa-solid fa-trash"></i></span></button>
                    </div>

                </div>
            </div>

            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0">
                <div className="overflow-hidden">
                    <div className="text-2xl hover:underline"><a href="/">https://www.slinkly.in</a></div>
                    <div className="opacity-50 hover:underline"><a href="/">{limitLinkLength("https://www.youtube.com/watch?v=H9M02of22z4&t=111s", 34)}</a></div>
                    <div className="text-[1rem]"><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span className="">23-01-2024</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="hover:text-cyan-500" >Share Access</button>
                    <button className="hover:text-cyan-500">View Analytics</button>
                    <div className="flex gap-3 ">

                        <button className="hover:text-cyan-500"><span className="m-1 "><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        <button className="hover:text-green-400"><span className="m-1"><i title="Edit" class="fa-solid fa-pencil"></i></span></button>
                        <button className="hover:text-red-500"><span className="m-1"><i title="Delete" class="fa-solid fa-trash"></i></span></button>
                    </div>

                </div>
            </div>

            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0">
                <div className="overflow-hidden">
                    <div className="text-2xl hover:underline"><a href="/">https://www.slinkly.in</a></div>
                    <div className="opacity-50 hover:underline"><a href="/">{limitLinkLength("https://www.youtube.com/watch?v=H9M02of22z4&t=111s", 34)}</a></div>
                    <div className="text-[1rem]"><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span className="">23-01-2024</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="hover:text-cyan-500" >Share Access</button>
                    <button className="hover:text-cyan-500">View Analytics</button>
                    <div className="flex gap-3 ">

                        <button className="hover:text-cyan-500"><span className="m-1 "><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        <button className="hover:text-green-400"><span className="m-1"><i title="Edit" class="fa-solid fa-pencil"></i></span></button>
                        <button className="hover:text-red-500"><span className="m-1"><i title="Delete" class="fa-solid fa-trash"></i></span></button>
                    </div>

                </div>
            </div>
            
            



        </div>
    )
}

export default Urls;