# remark-lint-no-mixed-case-url-hash

[![npm version](https://img.shields.io/npm/v/remark-lint-no-mixed-case-url-hash.svg)](https://www.npmjs.com/package/remark-lint-no-mixed-case-url-hash)
[![Test](https://github.com/ybiquitous/remark-lint-no-mixed-case-url-hash/actions/workflows/test.yml/badge.svg)](https://github.com/ybiquitous/remark-lint-no-mixed-case-url-hash/actions/workflows/test.yml)

A [`remark-lint`](https://github.com/remarkjs/remark-lint) rule disallows a mixed-case URL hash.

`ok.md`:

```markdown
[foo](foo.md#bar)
```

`not-ok.md`:

```markdown
[foo](foo.md#Bar)
```
