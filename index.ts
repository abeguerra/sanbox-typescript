import greeter from "./src/greeter";

const greeting: string = greeter({
  firstName: "Abe",
  lastName: "Guerra"
});

console.log(greeting);