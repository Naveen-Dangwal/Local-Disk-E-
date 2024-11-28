import styles from "./Item.module.css";

export default function Item({fooditem,bought,handlebuybutton}) {
  
  return (
    <div>
      <li  className={`${styles.itemLi,styles.type} list-group-item ${bought && "active"}`}>
            {fooditem}
            <button className={`${styles.button} btn btn-primary`}
            onClick={handlebuybutton}>Buy</button>
          </li>
    </div>
  )
}
