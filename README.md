# config-snowpack

_config-snowpack_ is a configuration preset for [Snowpack] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-snowpack

... or [yarn], like so:

    yarn add --dev @fundamend/config-snowpack

## Usage

In your [snowpack.config.js], import _config-snowpack_ and spread it into the exported object, like so:

```js
const config = require('@fundamend/config-snowpack');

module.exports = {
	...config,
};
```

You can extend the imported preset by adding additional [configuration options] to the exported configuration object, for example like this:

```js
const config = require('@fundamend/config-snowpack');

module.exports = {
	...config,
	plugins: ['@snowpack/plugin-sass'],
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[configuration options]: https://www.snowpack.dev/reference/configuration
[snowpack]: https://www.snowpack.dev/
[snowpack.config.js]: https://www.snowpack.dev/reference/configuration
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
