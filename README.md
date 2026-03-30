# No Orphan Words

A lightweight WordPress plugin that prevents orphan words (a single word on the last line of a paragraph or heading) by replacing the last space with a non-breaking space.

## How it works

A small front-end script walks the text nodes of every `<p>` and `<h1>`–`<h6>` element and swaps the final whitespace before the last word with a non-breaking space (`\u00A0`). This keeps the last two words together, eliminating orphans without altering your markup or breaking event listeners.

## Installation

1. Copy the `no-orphan-words` folder into `wp-content/plugins/`.
2. Activate the plugin from the WordPress admin.

No configuration needed — it works automatically on every front-end page.

## License

GPLv2 or later.
