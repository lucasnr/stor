const toDo = [
  {
    title: 'Call all the remaining contacts',
    description:
      "Call all the remaining contacts to see if they are still interested in our products since the friday's meeting and the change of the values of our latest batch",
    type: 'call',
  },
  {
    title: 'Examine batch number #103944',
    description:
      'Some of the employees have reported that they are not able to identify the possible causes of the malfunction of this batch',
    type: 'exam',
  },
  {
    title: 'Visit the secondary werehouse',
    description:
      'Visit our secondary werehouse to see why the batch examined on last week has presented malfunction',
    type: 'visit',
  },
  {
    title: 'Ship this month products',
    description:
      'Ship all the sold products on this month to their destinations',
    type: 'shipment',
  },
];

const inProgress = [
  {
    title: 'Visit the werehouse',
    description:
      'Visit our central werehouse to see why the batch examined on last week has presented malfunction',
    type: 'visit',
  },
  {
    title: 'Ship last week products',
    type: 'shipment',
  },
  {
    title: "Call the secondary werehouse machine's manufactor",
    description:
      'Ask them about the insurance plans and the costs of maintenance',
    type: 'call',
  },
];

const overdue = [
  {
    title: 'Examine all batches from our secondary werehouse',
    description:
      'Since we found out about the machines problems with have to be aware of the status of the batches which came from there',
    type: 'exam',
  },
];

const done = [
  {
    title: 'Ship last month forgoten merchandise',
    description:
      'Move the merchandise to a place where its closer to their owners',
    type: 'shipment',
  },
];

const tasks = {
  toDo,
  inProgress,
  overdue,
  done,
};

module.exports = tasks;
