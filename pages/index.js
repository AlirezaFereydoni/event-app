import EventList from "../components/event/list/list.jsx";
import { getFeaturedEvents } from "../controller";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = props => {
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="All Featured Events that we could join..." />
      </Head>
      <NewsletterRegistration />
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
