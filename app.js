const consoleColor = require('./utility/console-color');
const mockApi = require('./mock-api');
const interceptor = require('./interceptor');

/**
 * メイン処理
 */
class App {
  static run() {
    const request = {
      header: {},
      body: {
        param: 'requestParam'
      }
    };
    const response = {
      header: {},
      body: {}
    };
    interceptor(request, response, mockApi);

    // ログ出力
    // console.log();
    // consoleColor.yellow();
    // console.log('### リクエストボディ ###');
    // consoleColor.reset();
    // console.dir(request);
    console.log();
    consoleColor.yellow();
    console.log('### インターセプターでフィルタリングしたレスポンスボディ ###');
    consoleColor.reset();
    console.dir(response);
  }
}

App.run();
