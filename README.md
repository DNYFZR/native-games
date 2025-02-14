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

- configured .github/workflows/build.yml