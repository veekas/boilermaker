# Boilermaker

## Dependencies

* *webpack-dev-server*: serve up static files from the start folder. Good for writing a client-side application without a full express server (e.g. client app that only makes AJAX requests to external APIs) or if a server isn't needed (e.g. if using a cloud database like Firebase). Another option for this is *http-server*.
* *express*: server, assuming we want to set it up from scratch instead of using webpack-dev-server
* *react*: gives direct access to react
* *react-dom*: DOM bindings for react router
* *react-router-dom*: entry point for DOM rendering paths

### Dev Dependencies

* *webpack*: module bundler for use in the browser
* *babel-core*: core of babel compiler
* *babel-loader*: transpiles JavaScript files using babel and webpack
* *babel-preset-react*: babel preset for react plugins
* *babel-preset-stage-2*: optional: gives access to the rest-spread operator and other experimental features
* *babel-preset-env*: ensures compatibility with older browsers
