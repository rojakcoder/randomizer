# Randomizer

Randomizer is a lightweight Web app to help pick random items. It is a single page application (SPA) written with <a href="https://vuejs.org/">Vue.js</a>.

## Getting started

After installing the necessary packages (`npm install`), run the build script to create the application.

```bash
npm run dev
```

The app can then be served using any Web server. A fast and simple way is to run `python -m SimpleHTTPServer`.

## Deployment

To build for production:

```bash
npm run prod
```

## Notes

### npm hashes changing from sha512 to sha1

If the integrity checksum for the npm packages change from sha512 to sha1, the straightforward way is to re-install them.

```bash
rm -rf node_modules/
rm package-lock.json
npm cache clear --force
npm install
```

[Reference](https://stackoverflow.com/questions/47638381/why-did-package-lock-json-change-the-integrity-hash-from-sha1-to-sha512)

