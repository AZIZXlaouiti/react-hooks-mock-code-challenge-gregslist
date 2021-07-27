import React ,{useState} from "react";

function ListingCard({item:{location,image,description,id},OnUpdate}) {
  const [fav,setFav] = useState(true)
  function updateItem() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    OnUpdate(id);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button  onClick ={()=>setFav(!fav)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick ={()=>setFav(!fav)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button onClick = {updateItem} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
