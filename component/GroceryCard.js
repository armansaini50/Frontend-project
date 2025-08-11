export default function GroceryCard({GroceryData})
{

    return(
        <div className="flex-none">
        <a href={GroceryData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GroceryData?.imageId}></img>
        <h1>{GroceryData?.action?.text}</h1>
        </a>
        </div>
    )
}
