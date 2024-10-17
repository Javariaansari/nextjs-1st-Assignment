//Home Page
import styles from './page.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/service">Services</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;



