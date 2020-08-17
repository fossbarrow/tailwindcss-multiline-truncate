/**
 * Build utility classes bassed on tailwind config settings
 *
 * Ellipsis lines are set in tailwind.config.js.
 *
 * @author PatricNox <https://github.com/PatricNox>
 * @return void
 */
module.exports = truncatePlugin = (variants = []) => ({
  addUtilities,
  config,
  e,
}) => {
  const lines = config("theme.truncate.lines");
  const keys = Object.keys(lines);

  // Make sure we have lines set in tailwind config.
  if (!keys.length) {
    return;
  }

  // Add utility class to tailwind.
  addUtilities(
    keys.map((key) => ({
      [`.${e(`truncate-${key}-lines`)}`]: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": lines[key],
        "-webkit-box-orient": "vertical",
      },
    }))
  ),
    variants;
};

