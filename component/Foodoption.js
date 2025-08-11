import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function Foodoption(){

    return(
        <>
       <div className="w-[72%] ml-60 flex flex-nowrap overflow-x-auto mt-20 gap-3 ">
            {
                imageGridCards.map((FoodData)=><FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
            }
          </div>

        </>
    )
}



