import EventList from "./components/event/list/list.jsx";
import { getFeaturedEvents } from "./dummyData";

const HomePage = () => {
  return (
    <div>
      <EventList events={getFeaturedEvents()} />
    </div>
  );
};

export default HomePage;
