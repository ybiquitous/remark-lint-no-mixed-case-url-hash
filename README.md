# remark-lint-no-mixed-case-url-hash

A [`remark-lint`](https://github.com/remarkjs/remark-lint) rule disallows a mixed-case URL hash.

`ok.md`:

```markdown
[foo](foo.md#bar)
```

`not-ok.md`:

```markdown
[foo](foo.md#Bar)
```
