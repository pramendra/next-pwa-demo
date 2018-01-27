## setup

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

https://github.com/pramendra/next-pwa-demo/tree/withReact (212 KB)
https://github.com/pramendra/next-pwa-demo/tree/withPreact (137 KB)
