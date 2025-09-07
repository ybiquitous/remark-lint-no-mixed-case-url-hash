import assert from "node:assert/strict";
import test from "node:test";

import { remark } from "remark";

import rule from "./index.js";

function runRule(code) {
  const { messages } = remark().use(rule).processSync(code);
  return messages.map((err) => ({
    column: err.column,
    line: err.line,
    message: err.message,
    ruleId: err.ruleId,
    source: err.source,
  }));
}

test("only hash", () => {
  assert.deepEqual(runRule("[foo](#fooBar)"), [
    {
      column: 1,
      line: 1,
      message: "The URL hash `#fooBar` should not be mixed-case",
      ruleId: "no-mixed-case-url-hash",
      source: "remark-lint",
    },
  ]);
});

test("file with hash", () => {
  assert.deepEqual(runRule("[foo](foo.md#Bar)"), [
    {
      column: 1,
      line: 1,
      message: "The URL hash `#Bar` should not be mixed-case",
      ruleId: "no-mixed-case-url-hash",
      source: "remark-lint",
    },
  ]);
});

test("empty hash", () => {
  assert.deepEqual(runRule("[foo](foo.md#)"), []);
});

test("no url", () => {
  assert.deepEqual(runRule("[foo]()"), []);
});
