# Bookshelves2

SPA about books and genres has built on Angular2.

##Requirements

1. User should be able to view genres, create, update and delete them
2. User should be able to view books, create, update and delete them
3. Every book can belongs to any genres
4. Genre list and book list located on separate pages
5. Data have transferred from Web API. It can be angular2-in-memory-web-api
https://www.npmjs.com/package/angular2-in-memory-web-api
6. Loading spinner animation appears during requests to server
7. Styles library is Bootstrap
8. User controls is from PrimeNG library

Project template based on angular2-webpack-starter
https://github.com/AngularClass/angular2-webpack-starter

**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/angularclass/angular2-webpack-starter.git

# change directory to our repo
cd angular2-webpack-starter

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

## TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

### Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

