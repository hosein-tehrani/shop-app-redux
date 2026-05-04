const filters = [
  { name: "All", value: "", id: 1 },
  { name: "Electronics", value: "electronics", id: 2 },
  { name: "Jewelery", value: "jewelery", id: 3 },
  { name: "Men's Clothing", value: "men's clothing", id: 4 },
  { name: "Women's Clothing", value: "women's clothing", id: 5 },
];
import styles from "./Sidebar.module.css";
import { FaListUl } from "react-icons/fa";
function Sidebar({ category, categoryHandler }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul>
        {filters.map((list) => (
          <li
            className={category === list.value ? styles.selected : undefined}
            onClick={() => categoryHandler(list.value)}
            key={list.id}
          >
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
