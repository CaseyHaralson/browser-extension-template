# browser-extension-template

This template is a starting point for generating browser extensions.
It can generate different extension builds for different browsers (Chrome and Firefox by default), and comes with the following as a starting point:

- **options page** (shown when editing an extension's options)
- **popup page** (shown when clicking on the extension)
- **background service worker** (runs behind the scenes with no access to a page's content)
- **content script that runs on every website** (runs with access to a page's content)

## Running Locally

Steps:

1. Install project dependencies: `npm install`
2. Run the build. This will build all browser specific versions of the extension: `npm run build:prod`

### Installing In Chrome

Steps:

0. Run the dev build for the browser, watch for changes, and rebuild whenever a file changes (or you can use the prod build from above and can skip this step): `npm run build:chrome`
1. Go to the extensions page: [chrome://extensions](chrome://extensions)
2. Turn on "Developer Mode"
3. Click on "Load unpacked" under Extensions
4. Select the Chrome build folder: `build/chrome`

Note: you will need to reload the extension whenever you make a change to the source.
The files will rebuild as long as `npm run build:chrome` is still running, but the extension won't reload until you manually reload it from the extensions page.

### Installing in Firefox

Steps:

0. Run the dev build for the browser, watch for changes, and rebuild whenever a file changes (or you can use the prod build from above and can skip this step): `npm run build:firefox`
1. Go to the about debugging page: [about:debugging](<about:debugging>) <a href='about:debugging'>about:debugging</a>
2. Click on the "This Firefox" option
3. Click on the "Load Temporary Add-on" button
4. Select the manifest file in the Firefox build folder: `build/firefox/manifest.json`

Note: you will need to reload the extension whenever you make a change to the source.
The files will rebuild as long as `npm run build:firefox` is still running, but the extension won't reload until you manually reload it from the extensions page.

Note: the extension will need to be re-added whenever Firefox restarts.

Note: the "manifest.firefox.json" file is set to use "manifest_version" 2.
It isn't (currently?) possible to ask for some permissions during install or set that some permissions are required in version 3.

## Structure

All of the extension development code exists in the [src folder](./src) with html, images, scripts, and styles each living in their own directories.

There is a manifest.json file in the source folder that can be customized for each of the browsers.

The [webpack.config.js](./webpack.config.js) file is used to build the extension output.
It bundles each of the javascript entry targets and copies all the other files (html, images, styles) into the build output folder.
It does this for each browser target and copies those files plus the correct manifest file to the build output folder.
This can all be triggered by running the "build" scripts from the [package.json](./package.json) file.

## Examples and References

- [manifest.json settings](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Chrome extension samples](https://github.com/GoogleChrome/chrome-extensions-samples)
- [Mozilla example extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples)
