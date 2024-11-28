import styles from './WelcomeMessage.module.css';
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

export default function WelcomeMessage() {
  const {todoItems}=useContext(TodoItemsContext);


  return (
    todoItems.length===0 && <p className={styles.welcome}>Enjoy Your Day</p>
  )
}