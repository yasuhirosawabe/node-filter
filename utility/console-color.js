/**
 * console出力時の色を変更するユーティリティ
 */
module.exports = class {
  static black() {
    process.stdout.write('\u001b[30m');
  }
  static red() {
    process.stdout.write('\u001b[31m');
  }
  static green() {
    process.stdout.write('\u001b[32m');
  }
  static yellow() {
    process.stdout.write('\u001b[33m');
  }
  static blue() {
    process.stdout.write('\u001b[34m');
  }
  static magenta() {
    process.stdout.write('\u001b[35m');
  }
  static cyan() {
    process.stdout.write('\u001b[36m');
  }
  static white() {
    process.stdout.write('\u001b[37m');
  }
  static reset() {
    process.stdout.write('\u001b[0m');
  }
}
