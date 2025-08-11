import { GrocerGridCard } from "../utils/GroceryData";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){

    return(
        <div className="mt-0 w-[80%] container mx-auto">
            <h1 className="font-bold text-3xl ml-25 mt-20">Shop Groceries on Instamart</h1>
            

            <div className="w-[88%] ml-20 container mx-auto flex flex-nowrap overflow-x-auto mt-10 gap-3 ">
                    {
                        GrocerGridCard.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData}></GroceryCard>)
                    }
            </div>
            
            
            </div>   
    )
}
