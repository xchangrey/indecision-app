const objects = [
  {
    firstName: 'Christian',
    lastName: 'Geroy',
  },
  {
    firstName: 'Christian1',
    lastName: 'Geroy',
  },
  {
    firstName: 'Alex',
    lastName: 'Seitz',
  },
];

objects.sort((obj1, obj2) => {
  if (obj1.firstName === obj2.firstName) {
    return obj1.lastName - obj2.lastName;
  }

  return obj1.firstName - obj2.firstName;
});

console.log(objects);