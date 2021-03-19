import styles from "./button.module.css";
import Link from "next/link";

const Button = props => {
  return (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
