const historicalData = [
  {
    date: '2023-06-25',
    value: 800,
  },
  {
    date: '2023-05-25',
    value: 469,
  },
  {
    date: '2023-04-25',
    value: 500,
  },
  {
    date: '2023-03-25',
    value: 410,
  },
  {
    date: '2023-02-25',
    value: 800,
  },
  {
    date: '2023-01-25',
    value: 800,
  },
].reverse();

const forecastData = [
  {
    date: '2023-12-25',
    value: 500,
  },
  {
    date: '2023-11-25',
    value: 410,
  },
  {
    date: '2023-10-25',
    value: 800,
  },
  {
    date: '2023-09-25',
    value: 469,
  },
  {
    date: '2023-08-25',
    value: 500,
  },
  {
    date: '2023-07-25',
    value: 410,
  },
].reverse();

const completeData = [...historicalData, ...forecastData];

const energyEvents = [
  {
    startDate: new Date('2023-02-15T00:00:00'),
    endDate: new Date('2023-02-17T00:00:00'),
    type: 'Energy',
  },
  {
    startDate: new Date('2023-02-13T00:00:00'),
    endDate: new Date('2023-02-14T00:00:00'),
    type: 'Energy',
  },
  {
    startDate: new Date('2023-02-11T00:00:00'),
    endDate: new Date('2023-02-12T00:00:00'),
    type: 'Energy',
  },
];

const heatEvents = [
  {
    startDate: new Date('2023-02-16T00:00:00'),
    endDate: new Date('2023-02-18T00:00:00'),
    type: 'Heat Pump',
  },
  {
    startDate: new Date('2023-02-14T00:00:00'),
    endDate: new Date('2023-02-15T00:00:00'),
    type: 'Heat Pump',
  },
  {
    startDate: new Date('2023-02-10T00:00:00'),
    endDate: new Date('2023-02-13T00:00:00'),
    type: 'Heat Pump',
  },
];

const allEvents = [...energyEvents, ...heatEvents];

export {
  historicalData,
  forecastData,
  completeData,
  energyEvents,
  heatEvents,
  allEvents,
};
