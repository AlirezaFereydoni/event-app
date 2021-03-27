import EventList from "../../components/event/list/list.jsx";
import { getAllEvents } from "../../controller";
import SearchBox from "../../components/event/event-search";

const EventPage = ({ eventItems }) => {
  return (
    <div>
      <SearchBox />
      <EventList events={eventItems} />
    </div>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}

export default EventPage;
