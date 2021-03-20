import EventList from "../../components/event/list/list.jsx";
import { getAllEvents } from "../dummyData";
import SearchBox from "../../components/event/event-search";

const EventPage = () => {
  const eventItems = getAllEvents();

  return (
    <div>
      <SearchBox />
      <EventList events={eventItems} />
    </div>
  );
};

export default EventPage;
