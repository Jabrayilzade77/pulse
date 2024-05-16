import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';
import { MainContext } from '../context/MainProvider';
import { WishListContext } from '../context/WishListProvider';

function Navbar() {
 const {basket} = useContext(MainContext)
 const {wishList} = useContext(WishListContext)
  return (
  <>

  <div className={styles.navbar_container}>
  <div className={styles.pulse}>Pulse.</div>
   <div className={styles.links}>
   <Link to={"/"}>Home</Link>
   <Link to={"/about"}>About us</Link>
   <Link to={"/add"}>Add</Link> 
   <Link to={"/admin"}>Admin</Link>
   <Link to={"/basket"}>Basket {basket.length}</Link>
   <Link to={"/wishList"}>WishList {wishList.length}</Link>
   </div>
   <div className={styles.reservation}>Reservation</div>
  </div>
  </>
  )
}

export default Navbar