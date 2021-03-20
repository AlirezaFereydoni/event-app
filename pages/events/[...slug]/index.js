import { useRouter } from "next/router";
import EventList from "./../../../components/event/list/list";
import { getFilteredEvents } from "../../dummyData";

const FilteredEvents = () => {
  const router = useRouter();
  const [year, month] = router.query.slug;
  const filteredList = getFilteredEvents({ year: +year, month: +month });

  return <EventList events={filteredList} />;
};

export default FilteredEvents;
