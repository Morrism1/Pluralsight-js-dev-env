import { expect } from "chai";
import { JSDOM } from "jsdom";
//import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  // eslint-disable-line
  it("should say hello", done => {
    // eslint-disable-line
    const options = {};
    JSDOM.fromFile("./src/index.html", options)
      .then(dom => {
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Hello World");
        done();
      })
      .catch(done);
  });
});
