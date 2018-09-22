const consoleColor = require('./utility/console-color');

/**
 * Mock API
 * APIのレスポンスを生成
 */
module.exports = (request, response) => {
  response.body = [{
    remain: 'インターセプターで消されないよ',
    remove: 'インターセプターで消えるよ'
  }, {
    remain: '私は居残り組',
    remove: '消さないでー'
  }];
  consoleColor.yellow();
  console.log('### Mock APIが返す生のレスポンスボディ ###');
  consoleColor.reset();
  console.dir(response);
}
