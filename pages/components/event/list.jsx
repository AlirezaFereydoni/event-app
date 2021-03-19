import EventItem from "./item";

const EventList = props => {
  return (
    <ul>
      {props.events.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
};

export default EventList;
