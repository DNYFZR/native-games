<h2 align="center">Native Games</h2>

React Native blackjack & poker app built with Expo

### Deployment notes

- added base url to app.json

```json
"experiments": {
    "typedRoutes": true,
    "baseUrl": "/native-games"
  }

```

- added web build command to package.json scripts

```json
"build": "expo export -p web"

```

- configured .github/workflows/build.yml