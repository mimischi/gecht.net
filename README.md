# Personal portfolio

This is a simple landing page for my personal domain
([https://gecht.net](https://gecht.net)). This repository was used to play
around with [`parcel`](https://parceljs.org/) for bundling and
[`bulma`](https://bulma.io/) for the base layout.

# Set up

Make sure [`yarn`](https://yarnpkg.com) is installed. Installation with `npm`
should also be possible.

## Clone repository

First clone the repository with `git`:

```bash
git clone git@github.com:mimischi/gecht.net.git
```

## Install dependencies

After cloning this repository, install all dependencies.

```bash
yarn install
```

## Run `grunt` jobs

Using `grunt`, you will a) generate the background image in different sizes and
image formats, and b) generate a number of different favicon formats.

```bash
grunt
```

## Adapt paths defined in `browserconfig.xml`

`grunt` currently puts the wrong paths into
`src/assets/favicons/browserconfig.xml`. Make sure to remove the whole path and
just leave the relative path to each favicon.

Ideally this should be done automatically at some point.

## Running the site locally

After you took care of everything, simply run the page:

```bash
yarn run dev
```

## Building the site

To build the site for production, run:

```bash
yarn run build
```
