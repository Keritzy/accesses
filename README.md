accesses
-------------------------------

[![][npm-badge]][npm-link]
[![][travis-badge]][travis-link]
[![][david-badge]][david-link]
[![][david-dev-badge]][david-dev-link]
[![][mit-badge]][mit]

access logger

## Install
``` shell
$ npm install accesses --save
```

## Usage
### With express
``` javascript
const express = require('express');
const accesses = require('accesses');

const app = express();

// Register accesses middleware
app.use(accesses.express({
	appName: 'My Web Service',
	port: 616
}));

app.get('/', (req, res) => {
	res.send('yeah');
});

app.listen(80);
```
Now, we can monitor an accesses in localhost:616

## TODO
* express以外のフレームワークにも対応
* ログを任意のデータベースにストアできるように
* フロントエンドの依存関係をnpmかbowerで管理
* アクセスの要認証機能
* テーブルのカラムによるソート
* カラムの幅を調整できるように
* ログのダブルクリックで詳細

## License
[MIT](LICENSE)

## 余談
monicaって名前にしようと思ってたけど[すでにnpmにあったので](https://www.npmjs.com/package/monica)accessesにしました。

[npm-link]:        https://www.npmjs.com/package/accesses
[npm-badge]:       https://img.shields.io/npm/v/accesses.svg?style=flat-square
[mit]:             http://opensource.org/licenses/MIT
[mit-badge]:       https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis-link]:     https://travis-ci.org/syuilo/accesses
[travis-badge]:    http://img.shields.io/travis/syuilo/accesses.svg?style=flat-square
[david-link]:      https://david-dm.org/syuilo/accesses#info=dependencies&view=table
[david-badge]:     https://img.shields.io/david/syuilo/accesses.svg?style=flat-square
[david-dev-link]:  https://david-dm.org/syuilo/accesses#info=devDependencies&view=table
[david-dev-badge]: https://img.shields.io/david/dev/syuilo/accesses.svg?style=flat-square
