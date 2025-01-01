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
cd browser-compat-data
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
        if type == \"array\" then
          any(.[]; 
            (.version_added? |
              (. == tostring and startswith(\"${major_version:?}\"))
            )
            or
            (.version_removed? |
              (. == tostring and startswith(\"${major_version:?}\"))
            )
          )
        else
        (
          (.version_added? |
            (. == tostring and startswith(\"${major_version:?}\"))
          )
          or
          (.version_removed? |
            (. == tostring and startswith(\"${major_version:?}\"))
          )
        )
      end
    ) |
    {
      file: \"${file:?}\",
      feature: (.spec_url // .description),
    } *
    (
      if .support.nodejs | type == \"array\" then
        { nodejs: [.support.nodejs[] |
          select(
            (.version_added? | (. == tostring and startswith(\"${major_version:?}\"))) or
            (.version_removed? | (. == tostring and startswith(\"${major_version:?}\")))
          )
        ]}
      else
        { nodejs: .support.nodejs }
      end
    )
  """ < "${file:?}"
done < <(find javascript -name '*.json' -type f | grep -v vscode | grep -v eslint)
```

## Node.js 22 output

```json
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.difference",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.intersection",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.isdisjointfrom",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.issubsetof",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.issupersetof",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.symmetricdifference",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Set.json",
  "feature": "https://tc39.es/proposal-set-methods/#sec-set.prototype.union",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/proposal-array-from-async/#sec-array.fromAsync",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.drop",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.every",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.filter",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.find",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.flatmap",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.foreach",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.map",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.reduce",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.some",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.take",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Iterator.json",
  "feature": "https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.toarray",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/builtins/Promise.json",
  "feature": "https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.withResolvers",
  "nodejs": {
    "version_added": "22.0.0"
  }
}
{
  "file": "javascript/statements.json",
  "feature": "Import attributes with `assert` syntax (formerly import assertions)",
  "nodejs": {
    "version_added": "16.14.0",
    "version_removed": "22.0.0"
  }
}
{
  "file": "javascript/statements.json",
  "feature": "`assert {type: 'json'}`",
  "nodejs": [
    {
      "version_added": "17.5.0",
      "version_removed": "22.0.0"
    }
  ]
}
```

## Node.js 20 output

```json
{
  "file": "javascript/operators/import_meta.json",
  "feature": "https://html.spec.whatwg.org/multipage/webappapis.html#import-meta-resolve",
  "nodejs": [
    {
      "version_added": "20.8.0"
    },
    {
      "version_added": "20.6.0",
      "version_removed": "20.8.0",
      "partial_implementation": true,
      "notes": "Returns a `URL` object instead of a string."
    }
  ]
}
{
  "file": "javascript/builtins/WeakSet.json",
  "feature": "Non-registered symbols as keys",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/Array.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/RegExp.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-get-regexp.prototype.unicodesets",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/FinalizationRegistry.json",
  "feature": "Non-registered symbol as target",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/String.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.iswellformed",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/String.json",
  "feature": "https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.towellformed",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.toreversed",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.tosorted",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/TypedArray.json",
  "feature": "https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%typedarray%.prototype.with",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer-constructor",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.maxbytelength",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.resizable",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/ArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer.prototype.resize",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-sharedarraybuffer-constructor",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-sharedarraybuffer.prototype.grow",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.growable",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/SharedArrayBuffer.json",
  "feature": "https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.maxbytelength",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/WeakRef.json",
  "feature": "Non-registered symbol as target",
  "nodejs": {
    "version_added": "20.0.0"
  }
}
{
  "file": "javascript/builtins/WeakMap.json",
  "feature": "Non-registered symbols as keys",
  "nodejs": {
    "version_added": "20.1.0"
  }
}
{
  "file": "javascript/statements.json",
  "feature": "https://tc39.es/proposal-import-attributes/#prod-WithClause",
  "nodejs": [
    {
      "version_added": "20.10.0"
    }
  ]
}
{
  "file": "javascript/statements.json",
  "feature": "`with {type: 'json'}`",
  "nodejs": [
    {
      "version_added": "20.10.0"
    }
  ]
}
```
