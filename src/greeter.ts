interface Person {
  firstName: string,
  lastName: string,
  age?: number
}

export default (person: Person): string => {
  return `Hello ${person.firstName} ${person.lastName}`;
}