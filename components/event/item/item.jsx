import styles from "./itemStyle.module.css";
import Button from "../../button/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowIcon from "../../icons/arrow-right-icon";

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
        <DateIcon />
        <time>{readableHumanDate}</time>
      </div>
      <div>
        <AddressIcon />
        <address className={styles.address}>{formattedAddress}</address>
      </div>
      <div className={styles.actions}>
        <Button link={`/events/${id}/`}>
          <ArrowIcon />
          Special Event
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
