export const sortTickets = (tickets, filter) => {
  switch (filter) {
    case 'price':
      return tickets.sort((a, b) => +a.price - +b.price);
    case 'fast':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration;
        const second = b.segments[0].duration + b.segments[1].duration;
        return first - second;
      });
    case 'optimal':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration + +a.price;
        const second = b.segments[0].duration + b.segments[1].duration + +b.price;
        return first - second;
      });
    default:
      return tickets;
  }
};

// eslint-disable-next-line consistent-return
export const activeTickets = (active, tickets) => {
  if (!active.length) return [];
  if (active.length === 4) return [...tickets];
  if (active.includes('Без пересадок')) {
    return tickets.filter((el) => {
      return el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0;
    });
  }
  if (active.includes('1 пересадка')) {
    return tickets.filter((el) => {
      return el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1;
    });
  }
  if (active.includes('2 пересадки')) {
    return tickets.filter((el) => {
      return el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2;
    });
  }
  if (active.includes('3 пересадки')) {
    return tickets.filter((el) => {
      return el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3;
    });
  }
};
