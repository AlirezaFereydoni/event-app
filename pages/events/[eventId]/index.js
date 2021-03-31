import { getEventById, getFeaturedEvents } from "../../../controller";
import EventContent from "../../../components/event/event-detail/event-content";
import EventLogistics from "../../../components/event/event-detail/event-logistics";
import EventSummary from "../../../components/event/event-detail/event-summary";
import Comments from "../../../components/input/comments";

const SpecialEvent = ({ detailEvent }) => {
  return detailEvent !== undefined ? (
    <div>
      <Head>
        <title>{detailEvent.title}</title>
        <meta name="description" content={detailEvent.description} />
      </Head>
      <EventSummary title={detailEvent.title} />

      <EventLogistics
        date={detailEvent.date}
        address={detailEvent.location}
        image={detailEvent.image}
        imageAlt={detailEvent.title}
      />
      <EventContent>
        <p>{detailEvent.description}</p>
      </EventContent>
      <Comments eventId={detailEvent.id} />
    </div>
  ) : (
    <p>Event Not Found</p>
  );
};

export async function getStaticProps(context) {
  const EVENT_ID = context.params.eventId;
  const selectedEvent = await getEventById(EVENT_ID);
  return {
    props: {
      detailEvent: selectedEvent,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const allEvent = await getFeaturedEvents();

  return {
    paths: [...allEvent.map(event => event.id)],
    fallback: "blocking",
  };
}

export default SpecialEvent;
