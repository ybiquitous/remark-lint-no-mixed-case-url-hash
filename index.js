import { lintRule } from "unified-lint-rule";
import { visit } from "unist-util-visit";

/** @type {import("unified-lint-rule").Rule} */
function rule(tree, file) {
  visit(tree, { type: "link" }, (node) => {
    // @ts-expect-error -- TS7053: Element implicitly has an 'any' type because expression of type '"url"' can't be used to index type 'Node<Data>'.
    const url = /** @type {string} */ (node["url"]);

    const hashStartPos = url.indexOf("#");
    if (hashStartPos === -1) return;

    const hash = url.substring(hashStartPos, url.length);
    if (!hash) return;
    if (hash === hash.toLowerCase()) return;

    const message = `The URL hash \`${hash}\` should not be mixed-case`;
    file.message(message, node);
  });
}

const remarkLintNoMixedCaseUrlHash = lintRule(
  {
    origin: "remark-lint:no-mixed-case-url-hash",
    url: "https://github.com/ybiquitous/remark-lint-no-mixed-case-url-hash#readme",
  },
  rule
);

export default remarkLintNoMixedCaseUrlHash;
