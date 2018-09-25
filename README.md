# node.jsのフィルター実装サンプル

## 前提条件
本サンプルコードは下記のユースケースを想定しています。

* API Management Platform(apigee)などでレスポンスを返す際に値を一部フィルタリングする

## 概要
node.jsでフィルター処理を実装してみたサンプルコードです。  
なお、  
** apigeeのインターフェースをまったく考慮していません。 **  
まったくの空想のインタフェースで実装してます。イメージ的にはExpressやJavaServletのサーブレットフィルターです。

## 使い方
```sh
cd node-filter
npm start
```
