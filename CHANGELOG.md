### Major style changes
- The upgrade of Tailwind CSS from version 1 to version 2, will cause multiple style changes, check them out on the official Tailwind CSS websites:
  - https://blog.tailwindcss.com/tailwindcss-v2
  - https://tailwindcss.com/
  - https://tailwindcss.com/docs/upgrading-to-v2
### Deleted components
- `next.config.js` (we do not need it anymore since we now use `Built-In CSS Support` from `NextJS`)
  - for the absolute imports, we've used the `jsconfig.json` file
### Added components
- `jsconfig.json` (to keep our absolute imports)
### Deleted dependencies
- `@tailwindcss/custom-forms`
- `react-google-maps` (replaced by simple Google Maps API)
- `@types/googlemaps` (dependencies of `react-google-maps`)
- `@types/markerclustererplus` (dependencies of `react-google-maps`)
- `@types/react` (dependencies of `react-google-maps`)
- `@zeit/next-css` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `@zeit/next-sass` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `node-sass` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-images` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-fonts` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `next-compose-plugins` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `path` (we'll use the default `Built-In CSS Support` from `NextJS`)
- `webpack` (we'll use the default `Built-In CSS Support` from `NextJS`)
### Added dependencies
- `@tailwindcss/forms` (replaces `@tailwindcss/custom-forms`)
- `autoprefixer`
- `postcss`
### Updated dependencies
```
@fortawesome/fontawesome-free    5.14.0   →   5.15.3
@popperjs/core                    2.5.1   →    2.9.1
chart.js                          2.9.3   →    2.9.4
next                              9.5.3   →   10.0.9
react                           16.13.1   →   17.0.1
@types/react                    16.9.49   →   17.0.3
react-dom                       16.13.1   →   17.0.1
react-scripts                     3.4.3   →    4.0.3
tailwindcss                      1.8.10   →    2.0.4
typescript                        4.0.3   →    4.2.3
```
### Warning
_On a clean install there may be some warnings from request, chokidar, fsevents - they come from node_modules, and they do not affect the product at all._
### Original Release
- Added design from Tailwind Starter Kit by Creative Tim
