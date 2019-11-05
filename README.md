Выполненные шаги:
- `npm init`
- `npm i -s webpack webpack-cli`
- `touch app.js greet.js webpack.config.js`
- в package.json добавлены скрипты `build` и `start`:
```
"build": "./node_modules/.bin/webpack -c webpack.config.js",
"start": "node ./dist/main.js"
```

Скрипты:
- `npm run build` запускает сборку
- `npm start` запускает js-bundle через node.js