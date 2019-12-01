# Contributing Guidelines

Everything you need to know to start contributing should be found here!

## Technologies and learning

These resources might be helpful as you consider contributing, if any of this is new to you:

- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React](https://reactjs.org/docs/getting-started.html)
- [Electron](https://electronjs.org/docs/tutorial/about)
- [Blog: Introduction to Overlayed](https://dev.to/bengreenier/introducing-overlayed-streamer-overlays-powered-by-react-17ja)
- [Competitive Analysis: Streamlabs overlays](https://streamlabs.com/library#/)

## Project Layout

This project uses [lerna](https://lerna.js.org/) to manage the many different components that make up Overlayed2. That means that all functional elements of the project exist under the [`packages`](./packages) directory. Each subdirectory is a single component, that has it's own `package.json`, `README.md`, and lifecycle hooks.

### Where does X go?

Sorry, we don't currently have a centralized list of where things belong/currently live. The best thing I can recommend is file searching for what you're looking for, or reading the `README.md` of each package (under [`packages`](./packages)).

### How does local dependency management work?

[lerna](https://lerna.js.org/) manages cross-linking of dependencies during bootstrap. However, since we're using typescript, cross-linking isn't enough. We also define `prepare` hooks for modules that are meant to be consumed by others (note: currently the only exceptions to this are the `runtime-` modules).

To add a local dependency, manually add `"@overlayed2/module-name": "file:../module-name"` to the `package.json` of the project that needs the dependency.

To ensure VS Code (my editor of choice) provides intelisense for local dependencies, ensure there is also a `path` entry in the root-level [`tsconfig.json`](./tsconfig.json).

## Getting Started

The following steps are meant to be run in your favorite shell:

```
# Get the project
git clone https://github.com/bengreenier/overlayed2

# Open the project directory
cd overlayed2

# Install top-level dependencies (including lerna)
npm install

# Using lerna, install and cross-link packages
npm run bootstrap

# Using lerna, run the tests for all packages
npm run test
```

### Tests

> Note: ensure you've bootstrapped first: `npx lerna bootstrap`

Each package has it's own testing tools. In general, we try to standardize to [`jest`](https://jestjs.io/), but in the event it isn't a good fit (ie: electron e2e testing) we use other approaches.

However, each package exposes an npm script (`npm run test`) that will properly execute the full testbed including coverage.

### Running

> Note: ensure you've bootstrapped first: `npx lerna bootstrap`

There's currently two runtimes for overlayed2, [`runtime-browser`](./packages/runtime-browser) and [`runtime-electron`](./packages/runtime-electron). Both are capable of being run locally during development, and both expose an npm script to do so.

#### runtime-browser

To run the browser in development mode (including watch support):

```
# From the top-level folder
npm start --browser
```

#### runtime-electron

To run electron in development mode (including watch support):

```
# From the top-level folder
npm start --electron
```

### My flow

When I'm working locally, here's exactly what I do.

```
# In the project directory (ie: overlayed2)
# Start my editor
code .

# Start the browser runtime
# Note the url that's output from this command (probably http://localhost:1234)
# Open the url in a browser (not currently automated)
npm start --browser
```

Then, in my editor terminal session (could technically be any other shell session):

```
# Determine the package you want to work on
# Let's say ux-core in this case
cd packages/ux-core

# Start the package watcher
npm run watch

# edit code in that package
# runtime-browser will auto-update (hmr-refresh) components
# Side-by-side the editor and the browser if you like
```

## Repository Management

The [overlayed2 repo](https://github.com/bengreenier/overlayed2) is the home to all the project management stuff, including roadmaps, pull-requests, and issues. If you can't find something that you feel you need as part of the development process, please [open an issue](https://github.com/bengreenier/overlayed2/issues/new).

### Pull Requests

Please name pull requests in a meaningful way. In general, the title should begin with "Feature:" or "Bug:" and then a one-line description of the addition.

In the description field of the pull request, please reference any issues you're addressing, as well as providing a brief description of the change. For example:

```
Feature: Improve plugin loader performance

Previously, the plugin loader was using `fs.existsSync()` many times throughout a single run.
We've modified this pattern to now do the existence check once at the start,
greatly improving performance.

This change includes:

+ Fixes #12
+ Bump plugin-loader patch version
+ Fewer existence checks in the hotpath
+ Improve logging when existence fails
+ Update existence test
+ Modify docs, referencing new existence check pattern
```

### Issues

Issues should have a descriptive title, and a body that contains one of the following types of content.

#### Bug

The body of a bug should contain a brief description of the issue, the steps to reproduce the issue, and any relevant machine information. For example:

```
Bug: App immediately crashes on OSX Catalina

When I try to launch the app on my Mac, it crashes immediately with the following message:
"Unable to load native module: libimportant.so".

I'm running OSX Catalina 10.15, and am trying to use version 1.23.3 of the electron app.
```

#### Feature Request

The body of a feature request should contain a brief description of the desired feature, and the justification for adding it. For example:

```
Feature Request: Surfbar progress bars

As a developer, I'd like to see all loading progress bars in the command line interface
replaced with surfbar progress bars - you know, the ones with 🏄‍♀️ instead of `#`. I think
this would create a better developer experience and reduce the burden of waiting for
things to load, as now there's entertainment while you wait.
```

## Thank you

If you're taking the time to read this, I assume you're at least considering helping out with the development of overlayed2! This is really great news, and I'm excited to have you around. There's [lots to do](https://github.com/bengreenier/overlayed2/issues), from small fixes to large feature additions and every little bit helps. Let's make this thing awesome together.

Thanks again - You rock! 💙🌈
