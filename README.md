# Staticman Example (Eleventy)

This is a simple static site example using [Staticman](https://staticman.net/) for comments.

This is an example repository for blog post [Staticman: User generated content made static](https://www.vojtechruzicka.com/staticman/) on my blog.

## Features
-   Static comments rendered from YAML files in `_data/comments`.
-   Comment form that submits to the Staticman API.

## Getting Started

### Installation
```bash
npm install
```

### Development
To run the development server with live reload:
```bash
npm start
```

### Build
To build the site for production:
```bash
npm run build
```
The output will be in the `_site` directory.

## Staticman Configuration
Staticman is configured via the `staticman.yml` file in the root directory. It is set up to receive comments from the form and save them as YAML files in `_data/comments`.
