import { test } from "node:test";
import assert from "node:assert/strict";
import { login } from "../src/login.js";

test("login accepts a university email", () => {
  assert.equal(login({ email: "student@ucsc.edu" }).status, 200);
});
