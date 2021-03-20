import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import EventContent from "../../../components/event/event-detail/event-content";
import EventLogistics from "../../../components/event/event-detail/event-logistics";
import EventSummary from "../../../components/event/event-detail/event-summary";

const SpecialEvent = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const detailEvent = getEventById(eventId);

  return detailEvent !== undefined ? (
    <div>
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
    </div>
  ) : (
    <p>Event Not Found</p>
  );
};

export default SpecialEvent;
