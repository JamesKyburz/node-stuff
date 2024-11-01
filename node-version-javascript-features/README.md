# JavaScript features added or removed with the shipped Node.js version

Sometimes the release notes don't specify what features are new/removed.

* [node.green](https://node.green/) is a great resource, but doesn't always contain the latest javascript features.
* [mozilla JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web) contains the latest javascript features.
* [node 20 release notes](https://nodejs.org/en/blog/announcements/v20-release-announce)
* [node 20 changelog](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md)
* [node 22 release notes](https://nodejs.org/en/blog/announcements/v22-release-announce)
* [node 22 changelog](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V22.md)

The Mozilla JavaScript Reference uses git@github.com:mdn/browser-compat-data.git to render it's compatibility tables.

We can use this repository as a resource with the awesome tool [jq](https://github.com/jqlang/jq) to filter features changed for Node.js and output a summary.

## Script

```sh
git clone git@github.com:mdn/browser-compat-data.git
export major_version="22"
while IFS= read -r file; do
  jq """
    (.. |
    select(
      has(\"__compat\")?) |
      select(.__compat.support |
      has(\"nodejs\"))) |
      .__compat |
      select(.support.nodejs |
      (
        (.version_added? |
          (. == tostring and startswith(\"${major_version:?}\"))
        )
        or
        (.version_removed? |
          (. == tostring and startswith(\"${major_version:?}\"))
        )
      )
    ) |
    {
      file: \"${file:?}\",
      feature: (.spec_url // .description),
    } * .support.nodejs
  """ < "${file:?}"
done < <(find javascript -name '*.json' -type f | grep -v vscode | grep -v eslint)
```

## Node.js 22 output

```json
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.difference",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.intersection",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.isdisjointfrom",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.issubsetof",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.issupersetof",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.symmetricdifference",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.union",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/proposal-array-from-async/#sec-array.fromAsync",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.drop",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.every",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.filter",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.find",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.flatmap",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.foreach",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.map",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.reduce",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.some",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.take",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.toarray",
  "version_added": "22.0.0"
}
{
  "file": "javascript/builtins/Promise.json",
  "feature": "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.withResolvers",
  "version_added": "22.0.0"
}
{
  "file": "javascript/statements.json",
  "feature": "Import attributes with <code>assert</code> syntax (formerly import assertions)",
  "version_added": "16.14.0",
  "version_removed": "22.0.0"
}
```

## Node.js 20 output

```json
{
  "file": "javascript/operators/import_meta.json",
  "feature": "https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties",
  "version_added": "20.6.0",
  "notes": "Returns a URL object instead of a string."
}
{
  "file": "javascript/builtins/WeakSet.json",
  "feature": "Non-registered symbols as keys",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/RegExp.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-get-regexp.prototype.unicodesets",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/FinalizationRegistry.json",
  "feature": "Non-registered symbol as target",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/String.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.iswellformed",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/String.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.towellformed",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.toreversed",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.tosorted",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.with",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer-constructor",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.maxbytelength",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.resizable",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer.prototype.resize",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-sharedarraybuffer-constructor",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-sharedarraybuffer.prototype.grow",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.growable",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.maxbytelength",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/WeakRef.json",
  "feature": "Non-registered symbol as target",
  "version_added": "20.0.0"
}
{
  "file": "javascript/builtins/WeakMap.json",
  "feature": "Non-registered symbols as keys",
  "version_added": "20.1.0"
}
{
  "file": "javascript/statements.json",
  "feature": "Import attributes (<code>with</code> syntax)",
  "version_added": "20.10.0"
}
{
  "file": "javascript/statements.json",
  "feature": "<code>with {type: 'json'}</code>",
  "version_added": "20.10.0"
}
```
