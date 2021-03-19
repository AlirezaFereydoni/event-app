import Link from "next/link";

const EventItem = ({ id, title, description, date, location, image, isFeatured }) => {
  const readableHumanDate = new Date(date).toLocaleDateString({
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location?.replace(", ", "\n");

  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <time>{readableHumanDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={`/events/${id}/`}>SpecialEvent</Link>
      </div>
    </li>
  );
};

export default EventItem;
