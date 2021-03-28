import EventList from "../../components/event/list/list.jsx";
import { getAllEvents } from "../../controller";
import SearchBox from "../../components/event/event-search";
import Head from "next/head";

const EventPage = ({ eventItems }) => {
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="All Existing Events that we could join..." />
      </Head>
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
