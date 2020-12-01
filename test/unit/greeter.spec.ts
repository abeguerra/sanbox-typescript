import { expect } from "chai";

import greeter from "../../src/greeter";

describe('HelloWorld Module', () => {
  const greeting = greeter({
    firstName: "Alej",
    lastName: "Guerra"
  })
  it('should return a custom greeting', () => {
    expect(greeting).to.equal("Hello Alej Guerra");
  });
});
