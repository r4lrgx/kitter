![Shared config](https://github.com/user-attachments/assets/050ebff7-e020-4d45-a6c4-057e6d58ff2f)

<div align="center">
  <a aria-label="Written with" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?label=Written%20with&message=Typescript&color=blue&logo=typescript"/>
  </a>
   <a aria-label="Version" href="https://www.npmjs.com/package/@r4lrgx/shared-config">
    <img src="https://img.shields.io/npm/v/@r4lrgx/shared-config?color=&logo=npm&label=Version"/>
  </a>
  <a aria-label="Weekly Downloads" href="https://www.npmjs.com/package/@r4lrgx/shared-config">
    <img src="https://img.shields.io/npm/dw/@r4lrgx/shared-config?color=&logo=npm&label=Downloads"/>
  </a>
</div>

---

### 💾 Installation

```bash
npm install --save-dev @r4lrgx/shared-config
yarn add --save-dev @r4lrgx/shared-config
pnpm add --save-dev @r4lrgx/shared-config
```

### 🛠 How to use?

---

### 📅 [`changelog-config`](./src/changelog-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a changelog file first, `changelog.config.js` or `.changelogrc.js`

> [!WARNING] These are the only files supported at the moment

#### 1. Default config

```js
// changelog.config.js or .changelogrc.js

// @ts-check
import defineConfig from '@r4lrgx/shared-config/changelog-config';

/** @type {import("@r4lrgx/shared-config/changelog-config").Config} */
export default defineConfig();
```

#### 2. Custom config

> [!IMPORTANT] 🔩 If you have no idea of the config

| Key                   | Type      |
| --------------------- | --------- |
| `customCommitTypeMap` | `object`  |
| `customScopeMap`      | `object`  |
| `displayCommitTypes`  | `array`   |
| `displayScopes`       | `array`   |
| `showAuthor`          | `boolean` |
| `showAuthorAvatar`    | `boolean` |
| `showSummary`         | `boolean` |
| `withEmoji`           | `boolean` |
| `reduceHeadingLevel`  | `boolean` |
| `newlineTimestamp`    | `boolean` |
| `addBackToTop`        | `boolean` |

```js
// changelog.config.js or .changelogrc.js

// @ts-check
import defineConfig from '@r4lrgx/shared-config/changelog-config';

/** @type {import("@r4lrgx/shared-config/changelog-config").Config} */
export default defineConfig({
 showAuthor: true,
 showAuthorAvatar: true,
 showSummary: true,
 withEmoji: true,
 reduceHeadingLevel: true,
 newlineTimestamp: true,
 addBackToTop: true,
});
```

---

### 📨 [`commitlint-config`](./src/commitlint-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a commitlint file first, [files config](https://commitlint.js.org/reference/configuration.html)

> [!IMPORTANT]
> For best preference, I recommend using **commitlint.config.js** or **.commitlintrc.js**

```js
// commitlint.config.js or .commitlintrc.js

// @ts-check
import commitlintConfig from '@r4lrgx/shared-config/commitlint-config';

/** @type {import('@commitlint/types').UserConfig} */
export default commitlintConfig;
```

---

### 🈹 [`lefthook-config`](./src/lefthook-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a lefthook file first, [files config](https://lefthook.dev/configuration/#config-file-name)

> [!IMPORTANT]
> For best preference, I recommend using **lefthook.json** or **.lefthook.json**

```json
// lefthook.json

{
 "$schema": "https://json.schemastore.org/lefthook.json",
 "extends": ["node_modules/@r4lrgx/shared-config/dist/lefthook-config/base.json"]
}
```

---

### 🔄 [`release-config`](./src/release-config/index.ts)

> [!NOTE]
> A brief explanation of its use and the most recommended one.

You need to create a semantic release file first, [files config](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

> [!IMPORTANT]
> For best preference, I recommend using **release.config.js** or **.releaserc.js**

#### 1. Default config

```js
// release.config.js or .releaserc.js

// @ts-check
import defineConfig from '@r4lrgx/shared-config/release-config';

/** @type {import('@r4lrgx/shared-config/release-config').ReleaseConfigOptions} */
export default defineConfig();
```

#### 2. Custom config

Define your custom config following the **[Semantic Release Options](https://semantic-release.gitbook.io/semantic-release/usage/configuration#options)**

> [!IMPORTANT]
> 🔩 How to configure default and customizable plugins

| Plugin                  | Type     | Doc                                                                                                                         |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `commitAnalyzer`        | `object` | [View Commit Analyzer Docs](https://github.com/semantic-release/commit-analyzer?tab=readme-ov-file#options)                 |
| `exec`                  | `object` | [View Exec Docs](https://github.com/semantic-release/exec?tab=readme-ov-file#options)                                       |
| `releaseNotesGenerator` | `object` | [View Release Notes Generator Docs](https://github.com/semantic-release/release-notes-generator?tab=readme-ov-file#options) |
| `changelog`             | `object` | [View Changelog Docs](https://github.com/semantic-release/changelog?tab=readme-ov-file#options)                             |
| `npm`                   | `object` | [View NPM Docs](https://github.com/semantic-release/npm?tab=readme-ov-file#options)                                         |
| `git`                   | `object` | [View GIT Docs](https://github.com/semantic-release/git?tab=readme-ov-file#options)                                         |
| `github`                | `object` | [View Github Docs](https://github.com/semantic-release/github?tab=readme-ov-file#options)                                   |

> [!NOTE]
> If you want to add a custom plugin, you can do it by adding the key `plugin` inside the **array** you can add as many as you need.

```js
// release.config.js or .releaserc.js

// @ts-check
import defineConfig from '@r4lrgx/shared-config/release-config';

/** @type {import('@r4lrgx/shared-config/release-config').ReleaseConfigOptions} */
export default defineConfig({
 branches: [
  'next',
  {
   name: 'next',
   channel: 'next',
   prerelease: true,
  },
 ],
 plugin: [],
 // Default and customizable plugins
 commitAnalyzer: {
  releaseRules: [
   { breaking: true, release: 'major' },
   { type: 'feat', release: 'minor' },
   { type: 'feat', scope: 'int-*', release: false },
   { type: 'fix', release: 'patch' },
  ],
 },
 npm: {
  npmPublish: true,
  tarballDir: './path/to/you/dir',
  pkgRoot: './path/to/you/root',
 },
});
```

## 📋 License

This repository is distributed under the terms of the **[MIT License](LICENSE.md)**.
