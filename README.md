<h2 align="center">Native Wildcard</h2>

Testing out React Native using Expo with the blackjack & poker components in my wildcard app...

### Deployment notes

- added base url to app.json

```json
"experiments": {
    "typedRoutes": true,
    "baseUrl": "/ts-native-wildcard"
  }

```

- added web build command to package.json scripts

```json
"build": "expo export -p web"

```

- added web deploy command to package.json scripts

```json
"deploy": "gh-pages --nojekyll -d dist"

```

- configured .github/workflows/build.yml