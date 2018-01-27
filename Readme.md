# NextJS

A JavaScript Framework for building next generation SPA/PWA

[Slideshare](https://www.slideshare.net/dotPKG/nextjs-a-javascript-framework-for-building-next-generation-spa)

## Setup

```
$ git clone https://github.com/pramendra/next-pwa-demo.git
$ cd next-pwa-demo
$ npm install
```

## Run

### Development

```
$ npm run dev
```

### Server Side Rendering

```
$ npm run build && npm run start
```

### Client Side Rendering

```
$ npm run build && npm run export
$ cd out
$ http-server
```

## Deployment

download and install `now` [ZEIT – Apps](https://zeit.co/download)

## Lighthouse (PWA checklist status)

Deploy it to `now` and follow the following step

```
$ cd next-pwa-demo
$ now
$ lighthouse https://pwa-xxx.now.sh --view
```

## Production Build Size

[NextJS withReact](https://github.com/pramendra/next-pwa-demo/tree/withReact) (212 KB)
[NextJS withPreact](https://github.com/pramendra/next-pwa-demo/tree/withPreact) (137 KB)
