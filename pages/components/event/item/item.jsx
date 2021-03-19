import Link from "next/link";
import styles from "./itemStyle.module.css";

const EventItem = ({ id, title, description, date, location, image, isFeatured }) => {
  const readableHumanDate = new Date(date).toLocaleDateString({
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location?.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
      </div>
      <div className={styles.date}>
        <time>{readableHumanDate}</time>
      </div>
      <div>
        <address className={styles.address}>{formattedAddress}</address>
      </div>
      <div className={styles.actions}>
        <Link href={`/events/${id}/`}>SpecialEvent</Link>
      </div>
    </li>
  );
};

export default EventItem;
