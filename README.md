Выполненные шаги:
- `npm init`
- `npm i -s webpack webpack-cli`
- `touch app.js greet.js webpack.config.js`
- в package.json добавлены скрипты `build` и `start`:
```
"build": "./node_modules/.bin/webpack -c webpack.config.js",
"start": "node ./dist/main.js"
```
- `npm i -s raw-loader`
- `touch texts.txt`
- `npm i -s file-loader`
- добавлен файл `cat.jpeg`
- `touch index.html`
- `npm i -s url-loader`
- добавлен файл `dog.png`
- `npm i -s babel-loader @babel/core @babel/preset-env`
- `npm i -s typescript ts-loader`
- `touch tsconfig.json greeter.ts`

Скрипты:
- `npm run build` запускает сборку
- `npm start` запускает js-bundle через node.js