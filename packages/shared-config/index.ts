import changelogConfig from '@/changelog-config';
import commitlintConfig from '@/commitlint-config';
import releaseConfig from '@/release-config';
/**
 * Unified config Export
 *
 * Aggregates all project configurations for easy access and sharing across tools.
 * Contains pre-configured setups for:
 * - Changelog (Git changelog config)
 * - Commitlint (Git commit message conventions)
 * - Semantic Release (Automated versioning and publishing)
 *
 * @example Changelog
 * // Default configurations:
 * const { changelog } = require('@r4lrgx/shared-config'); // <- already has a good default setting
 * // Changelog usage (in changelog.config.js)
 * export default Changelog;
 *
 * @example Commitlint
 * // Extending configurations:
 * const { commitlint } = require('@r4lrgx/shared-config'); // <- already has a good default setting
 * // Commitlint usage (in commitlint.config.js)
 * export default {
 *   ...commitlint,
 *   rules: {
 *     ...commitlint.rules,
 *     'subject-case': [2, 'always', 'sentence-case']
 *   }
 * };
 *
 * @example Semantic release
 * // Using in build scripts:
 * const { release } = require('@r4lrgx/shared-config'); // <- already has a good default setting
 * // Semantic release usage (in release.config.js)
 * module.exports = release();
 */

export default {
 changelog: changelogConfig,
 commitlint: commitlintConfig,
 release: releaseConfig,
};
