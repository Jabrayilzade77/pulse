import React, { useContext } from "react";
import { WishListContext } from "../context/WishListProvider";

function WishList() {
  const { wishList, addwishList, isExits } = useContext(WishListContext);
  return (
    <>
      {wishList.map((x) => (
        <div
          key={x._id}
          style={{ border: "1px solid black", maxWidth: "300px" }}
        >
          <div onClick={() => addwishList(x)}>
            {" "}
            {isExits(x) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <div>{x.name}</div>

          <div>
            {" "}
            with wild mushrooms and asparagus -----------------------------{" "}
            {x.price} $
          </div>

          <br />
          <div></div>
        </div>
      ))}
    </>
  );
}

export default WishList;
