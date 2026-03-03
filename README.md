# Fabric

A framework for building React-based applications.

## Adding icons

1. Go to https://fonts.google.com/icons
2. Find an icon you want to add
3. Settings:
   - Outlined
   - Fill: `1`
   - Weight: `400`
   - Grade: `0`
   - Optical size": `24px`
4. Download the icon.
5. Place the icon in `packages/core/assets/icons/`. Pay attention to the name
   format (`first_second-24px.svg`).
6. Navigate to `packages/core/` and run `npm run build:icons`.

## Development

### Install all workspace deps

From the repository root:

    npm run install:all

#### Preview components while developing

Run the `docs` app where you can preview all of the components. See Docs
section below.

### Countinously build while developing

Packages need to be rebuilt to reflect their changes in the visual docs. You
can run the command `npm run dev:all` from the project root to automatically build
the core package and start the docs.

Alternatively you can build a specific package using the following command

From the repository root:

    npm run dev -w=<package name>

For the core package it would be:

    npm run dev -w=@heliconhq/core

## Running the docs

### Install all workspace deps and build all packages

To install all deps, build the project, and start the docs server:

```bash
npm run dev:all
```

## Running the example project

To install all deps, build the project, and start the example project:

```bash
npm run example:all
```

## Publish a `@next` release for testing

During development, before you publish a new release, you might want to test
your changes in another app. This is done by publishing a "snapshot" release
with the [npm dist-tag](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag)
`next`:

    make next

This will publish all `@fabric` packages with arbitrary version numbers but
with the the dist-tag `next`.

**Warning: This will make changes to your package.json files, do NOT push to main
without reverting them first!**

Then in your app:

    npm install @heliconhq/core@next @heliconhq/<another pkg>@next

Make sure to add all your `@fabric` deps in **one** `npm install` command to
avoid dependency resolution errors.

When you are done testing and you have published all packages through the
`main` pipeline (described below); switch back to using the `latest`
dist-tag:

    npm install @heliconhq/core@latest @heliconhq/<another pkg>@latest

## Publishing a new `@latest` release to the package registry

### Create a changeset

Fabric uses [changesets](https://github.com/changesets/changesets) to manage
changes, versioning and publishing. This is very useful with the current
monorepo structure.

See the [intro guide](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
for basic usage.

TLDR:

There are 3 steps in the publishing workflow:

1. Create a changeset. This lets you document what you have changed and how
   these changes should increment the semantic version in each package.

2. Update the version number in each packages' `package.json`.

3. Publish the packages to the registry.

The GitHub Actions pipeline takes care of the last 2 of the above steps. You only need
to do #1 with this command:

    npx changeset

Follow these steps:

    export NPM_TOKEN=<token>
    npx changeset

Walk through the wizard, make sure you select all packages in the first step, since we want the versions of all packages to be in sync.
Select no packages in the second two (unless you're making a major or minor version change), add a description of your changes.

**Warning: If you have used a next snapshot(above), restore the package.json files, or the versions will be messed up!**

    git add .
    git ci -am 'Add changeset.'
    git push

Then just wait, the pipeline will do the rest.

### CI/CD

As mentioned above the CI/CD takes care of incrementing the versions i each
packages' `package.json`. It does so by evaluating the changeset(s) you might
have created and commited. If there are no changesets in the repo, there will
be no version bumps and therefore no packages will be published.

## Installation in a project

First install the core package:

    npm install @heliconhq/core

Then the peer dependencies (as needed):

    npm install react react-dom
    npm install @emotion/core @emotion/babel-preset-css-prop

### Usage in a project

This package revolves around a central `App` component that automatically sets
up contexts and checks for an application. The different parts set up by this
component can be used independently if you need full control. It is, however,
advised that you use the `App` component whenever possible.

```JSX
import { App } from '@heliconhq/core';

const MyApp = () => <App>
  <div>Hello world!</div>
</App>;

export default MyApp;
```
