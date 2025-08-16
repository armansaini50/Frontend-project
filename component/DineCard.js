
export default function DineCard({RestData}){
    return(
        
        <div className="flex-none relative border border-transparent bg-gray-50">
        <a target="blank" href={RestData.cta.link}>
        
        {/* 1st div */}
        <div className="relative">
            
           <img className="w-80 h-50 object-cover rounded-2xl   "
           src={"https://media-assets.swiggy.com/swiggy/image/upload/" +RestData?.info?.mediaFiles[0]?.url} alt="Restaurant"/>

        {/* Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        
            <div>
            <p className="absolute bottom-2 left-2 text-[18px] text-white z-10">{RestData?.info?.name}</p>
            <p className="absolute bottom-2 right-2 text-[20px] text-white z-10"> {RestData?.info?.rating?.value}</p>
            </div>
        </div>


        {/* 2nd div */} 
        <div className="p-1">
            {/* area and distance */}
            <div>
            <p className="text-[#02060c99] overflow-hidden">{RestData?.info?.cuisines}</p>
                
                <p className="text-[#02060c99] overflow-hidden absolute bottom-0.5 right-2 mb-15  ">{RestData?.info?.costForTwo}</p>
                
            </div>

        {/* food type and price */}

            <div>
            
            <p className="text-[#02060c99] overflow-hidden ">{RestData?.info?.locality}</p>
                <p className="text-[#02060c99] overflow-hidden absolute bottom-0.5 right-2 mb-9 ">{RestData?.info?.locationInfo.distanceString}</p>
                
            </div>
        </div>
        

        {/* offer */}
        <div className="p-1 " >
            <p className="text-[#1ba672] bg-[#c8f9e5] rounded rounded-b-sm  ">upto 10% off with bank offers</p>
        </div>

        </a>
        </div>      
    )
}