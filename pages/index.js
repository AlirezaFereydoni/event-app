import EventList from "../components/event/list/list.jsx";
import { getFeaturedEvents } from "../controller";

const HomePage = props => {
  return (
    <div>
      <EventList events={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
