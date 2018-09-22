/**
 * インターセプト処理(レスポンスフィルターの実装部分)
 * Expressのようなインターフェイスを想定してみた
 */
module.exports = (request, response, next) => {

  // リクエスト前処理
  //----------------
  // ...

  // 後続処理の呼び出し(chain)
  next(request, response);

  // リクエスト後処理
  //----------------

  // 今回のリクエストではレスポンスボディに配列で返ってくるので(Mock APIでそのように実装した)
  // 必要なパラメーターだけ配列で詰め直してボディに設定する。
  response.body = response.body.map((elem) => {
    return {
      remain: elem.remain
    };
  });
}
