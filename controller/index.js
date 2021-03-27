export async function getAllEvents() {
  try {
    const jsonData = await fetch(
      "https://nextjscourse-march-2021-default-rtdb.firebaseio.com/events.json/"
    );
    const response = await jsonData.json();
    const data = [];
    for (const key in response) {
      data.push({ id: key, ...response[key] });
    }
    return data;
  } catch (err) {
    return err;
  }
}

export async function getFeaturedEvents() {
  const allEvent = await getAllEvents();
  return allEvent.filter(event => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvent = await getAllEvents();
  let filteredEvents = allEvent.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const allEvent = await getAllEvents();
  return allEvent.find(event => event.id === id);
}
