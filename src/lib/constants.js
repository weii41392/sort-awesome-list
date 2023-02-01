export const patterns = {
  githubRepo: /^(?:https:\/\/)?github.com\/([^/]+)\/([^/]+)\/?$/,
  githubRepoIncludeSub: /^(?:https:\/\/)?github.com\/([^/]+)\/([^/#]+)/,
  githubRepoPage: /^(?:https:\/\/)?([^/]+).github.io\/([^/]+)\/?$/
};

export const initialInput = `# sort-awesome-list

Sort any awesome list by GitHub Stars ✨

- Input a link to an awesome list or type in raw markdown
- Automatically sort the list items by their number of GitHub stars
- View the sorted list in rendered markdown or copy it to your clipboard

## Example

Check out this example taken from [sindresorhus/awesome](https://github.com/sindresorhus/awesome#programming-languages).

👈 On the left, you'll see the list in its original order **without any hint of popularity**.

👉 On the right, the list is **sorted by number of GitHub stars**, making it easy to find the de-facto standard.

- [JavaScript](https://github.com/sorrycc/awesome-javascript#readme)
  - [Promises](https://github.com/wbinnssmith/awesome-promises#readme)
  - [Standard Style](https://github.com/standard/awesome-standard#readme) - Style guide and linter.
  - [Must Watch Talks](https://github.com/bolshchikov/js-must-watch#readme)
  - [Tips](https://github.com/loverajoel/jstips#readme)
  - [Network Layer](https://github.com/Kikobeats/awesome-network-js#readme)
  - [Micro npm Packages](https://github.com/parro-it/awesome-micro-npm-packages#readme)
  - [Mad Science npm Packages](https://github.com/feross/awesome-mad-science#readme) - Impossible sounding projects that exist.
  - [Maintenance Modules](https://github.com/maxogden/maintenance-modules#readme) - For npm packages.
  - [npm](https://github.com/sindresorhus/awesome-npm#readme) - Package manager.
  - [AVA](https://github.com/avajs/awesome-ava#readme) - Test runner.
  - [ESLint](https://github.com/dustinspecker/awesome-eslint#readme) - Linter.
  - [Functional Programming](https://github.com/stoeffel/awesome-fp-js#readme)
  - [Observables](https://github.com/sindresorhus/awesome-observables#readme)
  - [npm scripts](https://github.com/RyanZim/awesome-npm-scripts#readme) - Task runner.
  - [30 Seconds of Code](https://github.com/30-seconds/30-seconds-of-code#readme) - Code snippets you can understand in 30 seconds.
  - [Ponyfills](https://github.com/Richienb/awesome-ponyfills#readme) - Like polyfills but without overriding native APIs.
- [Swift](https://github.com/matteocrippa/awesome-swift#readme) - Apple's compiled programming language that is secure, modern, programmer-friendly, and fast.
  - [Education](https://github.com/hsavit1/Awesome-Swift-Education#readme)
  - [Playgrounds](https://github.com/uraimo/Awesome-Swift-Playgrounds#readme)
- [Python](https://github.com/vinta/awesome-python#readme) - General-purpose programming language designed for readability.
  - [Asyncio](https://github.com/timofurrer/awesome-asyncio#readme) - Asynchronous I/O in Python 3.
  - [Scientific Audio](https://github.com/faroit/awesome-python-scientific-audio#readme) - Scientific research in audio/music.
  - [CircuitPython](https://github.com/adafruit/awesome-circuitpython#readme) - A version of Python for microcontrollers.
  - [Data Science](https://github.com/krzjoa/awesome-python-data-science#readme) - Data analysis and machine learning.
  - [Typing](https://github.com/typeddjango/awesome-python-typing#readme) - Optional static typing for Python.
  - [MicroPython](https://github.com/mcauser/awesome-micropython#readme) - A lean and efficient implementation of Python 3 for microcontrollers.

## Why GitHub Login?

- To import awesome lists from GitHub repos or to fetch GitHub stars for sorting, we need to make requests to [GitHub API](https://docs.github.com/en/rest).
- For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
- To process a relatively long awesome-list, authentication is required to increase the rate limit to 5000 requests per hour.

## Acknowledgment

- The markdown/HTML engines under the hood are from the [@unifiedjs](https://github.com/unifiedjs) collective ([\`remark\`](https://github.com/remarkjs) and [\`rehype\`](https://github.com/rehypejs))
- The code editor is a [CodeMirror 6](https://codemirror.net/) component from [@uiwjs](https://github.com/uiwjs)

## License

[MIT](license)
`;

export const initialOutput = `# sort-awesome-list

Sort any awesome list by GitHub Stars ✨

*   Input a link to an awesome list or type in raw markdown
*   Automatically sort the list items by their number of GitHub stars
*   View the sorted list in rendered markdown or copy it to your clipboard

## Example

Check out this example taken from [sindresorhus/awesome](https://github.com/sindresorhus/awesome#programming-languages).

👈 On the left, you'll see the list in its original order **without any hint of popularity**.

👉 On the right, the list is **sorted by number of GitHub stars**, making it easy to find the de-facto standard.

*   **\`154696\`** [Python](https://github.com/vinta/awesome-python#readme) - General-purpose programming language designed for readability.
    *   **\`3847\`** [Asyncio](https://github.com/timofurrer/awesome-asyncio#readme) - Asynchronous I/O in Python 3.
    *   **\`1737\`** [Data Science](https://github.com/krzjoa/awesome-python-data-science#readme) - Data analysis and machine learning.
    *   **\`1319\`** [Scientific Audio](https://github.com/faroit/awesome-python-scientific-audio#readme) - Scientific research in audio/music.
    *   **\`1250\`** [Typing](https://github.com/typeddjango/awesome-python-typing#readme) - Optional static typing for Python.
    *   **\`789\`** [MicroPython](https://github.com/mcauser/awesome-micropython#readme) - A lean and efficient implementation of Python 3 for microcontrollers.
    *   **\`516\`** [CircuitPython](https://github.com/adafruit/awesome-circuitpython#readme) - A version of Python for microcontrollers.
*   **\`29889\`** [JavaScript](https://github.com/sorrycc/awesome-javascript#readme)
    *   **\`107120\`** [30 Seconds of Code](https://github.com/30-seconds/30-seconds-of-code#readme) - Code snippets you can understand in 30 seconds.
    *   **\`12863\`** [Must Watch Talks](https://github.com/bolshchikov/js-must-watch#readme)
    *   **\`12396\`** [Tips](https://github.com/loverajoel/jstips#readme)
    *   **\`5730\`** [Functional Programming](https://github.com/stoeffel/awesome-fp-js#readme)
    *   **\`4395\`** [Micro npm Packages](https://github.com/parro-it/awesome-micro-npm-packages#readme)
    *   **\`4176\`** [npm](https://github.com/sindresorhus/awesome-npm#readme) - Package manager.
    *   **\`3430\`** [ESLint](https://github.com/dustinspecker/awesome-eslint#readme) - Linter.
    *   **\`1493\`** [Promises](https://github.com/wbinnssmith/awesome-promises#readme)
    *   **\`1040\`** [Mad Science npm Packages](https://github.com/feross/awesome-mad-science#readme) - Impossible sounding projects that exist.
    *   **\`690\`** [npm scripts](https://github.com/RyanZim/awesome-npm-scripts#readme) - Task runner.
    *   **\`526\`** [Network Layer](https://github.com/Kikobeats/awesome-network-js#readme)
    *   **\`359\`** [Standard Style](https://github.com/standard/awesome-standard#readme) - Style guide and linter.
    *   **\`345\`** [Maintenance Modules](https://github.com/maxogden/maintenance-modules#readme) - For npm packages.
    *   **\`341\`** [AVA](https://github.com/avajs/awesome-ava#readme) - Test runner.
    *   **\`321\`** [Observables](https://github.com/sindresorhus/awesome-observables#readme)
    *   **\`48\`** [Ponyfills](https://github.com/Richienb/awesome-ponyfills#readme) - Like polyfills but without overriding native APIs.
*   **\`22887\`** [Swift](https://github.com/matteocrippa/awesome-swift#readme) - Apple's compiled programming language that is secure, modern, programmer-friendly, and fast.
    *   **\`5521\`** [Education](https://github.com/hsavit1/Awesome-Swift-Education#readme)
    *   **\`3819\`** [Playgrounds](https://github.com/uraimo/Awesome-Swift-Playgrounds#readme)

## Why GitHub Login?

*   To import awesome lists from GitHub repos or to fetch GitHub stars for sorting, we need to make requests to [GitHub API](https://docs.github.com/en/rest).
*   For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
*   To process a relatively long awesome-list, authentication is required to increase the rate limit to 5000 requests per hour.

## Acknowledgment

*   The markdown/HTML engines under the hood are from the [@unifiedjs](https://github.com/unifiedjs) collective ([\`remark\`](https://github.com/remarkjs) and [\`rehype\`](https://github.com/rehypejs))
*   The code editor is a [CodeMirror 6](https://codemirror.net/) component from [@uiwjs](https://github.com/uiwjs)

## License

[MIT](license)`;
