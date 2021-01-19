import React, { useState } from "react";

function ListingCard({listingObj, handleDeleteListing}) {

  const [isFavorited, setIsFavorited] = useState(false)

  const { id ,image, description, location } = listingObj

function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
  .then(r => r.json())
  .then(() => {

    handleDeleteListing(id)
  })
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setIsFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorited(true)}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
