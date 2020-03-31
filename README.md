# symbol-explorer

[![Build Status](https://travis-ci.com/nemfoundation/symbol-explorer.svg?branch=master)](https://travis-ci.com/nemfoundation/symbol-explorer)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Symbol Explorer is a read-only web application to browse the content of the blockchain. The explorer supports searching for transactions, accounts, namespaces, mosaics, and blocks information on a given network.

## Requirements

### NodeJS

- NodeJS 8.9.X
- NodeJS 9.X.X
- NodeJS 10.X.X

## Installation

1. Clone the project.

```
git clone https://github.com/nemfoundation/symbol-explorer.git
```

2. Install the required dependencies.

```
cd nem2-explorer
npm install
```

3. Run the explorer application.

```
npm run dev
```

4. Visit http://localhost:8080/#/ in your browser.

## Developer notes

### Architecture

* `/src/store`: Handles the application logic with state management.
* `/src/infrastructure`: Handles the API / SDK request from Symbol nodes.
* `/src/views`: Handles the UI of the explorer.

## Getting help

Use the following available resources to get help:

- [Symbol Documentation][docs]
- Join the community [slack group (#sig-client)][slack] 
- If you found a bug, [open a new issue][issues]

## Contributing

This project is developed and maintained by NEM Foundation.

Contributions are welcome and appreciated. 
Check [CONTRIBUTING](CONTRIBUTING.md) for information on how to contribute.

## License

Copyright 2019-present NEM

Licensed under the [Apache License 2.0](LICENSE)

[self]: https://github.com/nemfoundation/symbol-explorer
[docs]: https://nemtech.github.io
[issues]: https://github.com/nemfoundation/symbol-explorer/issues
[slack]: https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLWZmZWRiMjViYTVhZjEzOTA0MzUyMTA1NTA5OWQ0MWUzNTA4NjM5OTJhOGViOTBhNjkxYWVhMWRiZDRkOTE0YmU
