import EventList from "./components/event/list.jsx";
import { getFeaturedEvents } from "./dummyData";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <EventList events={getFeaturedEvents()} />
    </div>
  );
};

export default HomePage;
