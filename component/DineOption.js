import {dineoutRestaurants} from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption (){

    return(
        <>
        <div className=" container mx-auto mt-20">
            <p className="font-bold text-3xl ml-40 mt-20">Discover Best restaurants on Dineout</p>

            <div className="max-w-[80%] flex flex-nowrap overflow-x-auto gap-1 container mx-auto mb-20 mt-10 ">
            {
                dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData} ></DineCard>)
            }
            </div>
        </div>
        </>
    )
}