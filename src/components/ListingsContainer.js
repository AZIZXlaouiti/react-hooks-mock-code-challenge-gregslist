import React ,  {useState,useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsList,OnUpdate}) {
  
  
  return (
    <main>
      <ul className="cards">
        
        {itemsList.map((item)=><ListingCard key={item.id} item={item} OnUpdate={OnUpdate}/> )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
