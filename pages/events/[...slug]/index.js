import { Fragment } from "react";
import { getFilteredEvents } from "../../../controller";
import EventList from "../../../components/event/list/list.jsx";
import ResultsTitle from "../../../components/result/";
import Button from "../../../components/button/button";
import ErrorAlert from "../../../components/alert";

function FilteredEventsPage({ filteredEvents, hasError, date }) {
  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(date.year, date.month - 1);

  return (
    <Fragment>
      <Head>
        <title>Filtering Events</title>
        <meta name="description" content={`All Events for ${date.month}/${date.year}.`} />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const filterData = context.params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const filteredEvents = await getFilteredEvents({
    year: +filteredYear,
    month: +filteredMonth,
  });

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  return {
    props: {
      filteredEvents: filteredEvents,
      date: {
        year: +filteredYear,
        month: +filteredMonth,
      },
    },
  };
}

export default FilteredEventsPage;
