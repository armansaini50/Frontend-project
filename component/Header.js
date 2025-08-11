export default function Header() {

    return(
       <header className="bg-[#ff5200]  font-serif h-">

        {/* upper Div */}
        <div className="flex justify-between container mx-auto items-center py-8 ">
            <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
        <div className="text-white flex gap-15 items-center text-base ">
            <a target="blank" href="https://www.swiggy.com/corporate/"> swiggy corporate</a>
            <a target="blank" href="https://partner.swiggy.com/login#/swiggy"> Partner with us</a>
            <a target="blank" className="border rounded-2xl px-4 py-3 m-3" href="https://www.swiggy.com/corporate/"> Get the App</a>
            <a target="blank" className="bg-black border border-black rounded-2xl px-4 py-3 m-3" href="https://www.swiggy.com/corporate/"> Sign in</a>
        </div>
        </div>

        {/* Middle Div */}

        <div className="relative pt-16 pb-8 ">
            <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Veggies"></img>
            <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="text-white max-w-[50%] text-5xl font-bold  container mx-auto text-center  ">
                Order food & groceries. Discover best restaurants. Swiggy it!</div>
            <div className="flex gap-5 max-w-[55%] container mx-auto pt-16 py-8 " >
                <input className="bg-white w-[40%] px-4 py-6 rounded-2xl   " placeholder="Enter your delivery location" ></input>
                <input className="bg-white w-[55%] px-4 py-6 rounded-2xl " placeholder="Search for restaurent items or more" ></input>
            </div>
        </div>
         
        {/* lower Div */}

        <div className="px-8 flex container mx-auto max-w-[80%]">
            <a href="https://www.swiggy.com/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
            </a>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>
           
        </div>


       </header>
    )
}