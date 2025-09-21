import type { Config } from '@r4lrgx/gitmoji/changelog-config/types';
import displayCommitTypes from '@r4lrgx/gitmoji/commit-types';

/**
 * Changelog Configuration Example
 *
 * This configuration applies the Changelog configuration with Gitmoji support.
 *
 * @example
 * // Basic usage in changelog.config.js:
 * import defineConfig from '@r4lrgx/shared-config/changelog-config';
 * export default defineConfig(); // <- already has a good default setting.
 *
 * @example
 * // Customizing changelog:
 * const customConfig = {
 *   ...changelogConfig,
 *   ...Args
 * };
 *
 * export default defineConfig(customConfig);
 */

const defaultConfig: Config = {
 customCommitTypeMap: {
  feat: {
   emoji: '✨',
   title: 'Features',
   subtitle: 'New features and enhancements',
  },
  fix: {
   emoji: '🐛',
   title: 'Bug Fixes',
   subtitle: 'Resolved bugs and issues',
  },
  perf: {
   emoji: '⚡',
   title: 'Performance Improvements',
   subtitle: 'Faster, leaner, better',
  },
  refactor: {
   emoji: '♻',
   title: 'Code Refactoring',
   subtitle: 'Code structure improvements',
  },
  chore: {
   emoji: '🔧',
   title: 'Chores',
   subtitle: 'Other tasks and maintenance',
  },
  docs: {
   emoji: '📝',
   title: 'Documentation',
   subtitle: 'Docs updates and improvements',
  },
  build: {
   emoji: '📦️',
   title: 'Build System',
   subtitle: 'Changes to build tools and processes',
  },
  ci: {
   emoji: '👷',
   title: 'Continuous Integration',
   subtitle: 'CI config updates and automation',
  },
  test: {
   emoji: '✅',
   title: 'Tests',
   subtitle: 'Added or updated tests',
  },
  style: {
   emoji: '🎨',
   title: 'Styles',
   subtitle: 'Visual tweaks and formatting',
  },
  wip: {
   emoji: '🚑️',
   title: 'Cleaning',
   subtitle: 'Work in progress or cleanup',
  },
  revert: {
   emoji: '⏪',
   title: 'Reverts',
   subtitle: 'Undone changes and rollbacks',
  },
 },
 customScopeMap: {
  '*': '🎯 *',
 },
 // displayScopes: [],
 displayCommitTypes,
 showAuthor: true,
 showAuthorAvatar: true,
 showSummary: true,
 withEmoji: true,
 reduceHeadingLevel: true,
 newlineTimestamp: true,
 addBackToTop: true,
} satisfies Config;

function changelogConfig(options: Config = defaultConfig): Config {
 if (!options || Object.keys(options).length === 0) return defaultConfig;
 return options;
}

export default changelogConfig;

export type { Config };
