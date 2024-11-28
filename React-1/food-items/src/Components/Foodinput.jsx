import styles from "./Foodinput.module.css";

export default function Foodinput({handleKeyDown}) {
  return (
    <input type="text" placeholder="enter the food items here" className={styles.foodInput}
    onKeyDown={handleKeyDown}
    ></input>
  )
}
