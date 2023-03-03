## memo
### bag.jsへのアクセス方法

[bag.jsファイルを作成後にocalhost:3000/products/bagにアクセスするとbag.jsファイルの中身が表示されます。ページの階層化も簡単に行うことができます。/products/bagの形はNested Routes(ネスト化されたルーティング)と呼ばれます。](http://localhost:3000/product/bag)


### 動的ファイルの作成(ダイナミックルーティング)
#### URLのproduct/の後ろにどんな文字列を入れてもブラウザにファイルの内容が表示されるようにする。

### [name].js
product/shoes, product/clothes,にすると、[name].jsファイルに記述した”商品のページです”が表示されます。

## URLに入れた文字列をページ内容に表示させるためuseRouter Hookを利用
useRouter Hookはnext/routerからimportする。
URLに含まれる文字列についてはrouter.query.nameから取得することができます。

### 更に階層が深い場合
[Name]ディレクトリの中に、更に[color].jsを作成する。[参考サイト](http://localhost:3000/product/shoues/red)
すると、出てくるよ。

階層の深い場合
[color].jsファイルは分割代入(Destructuring assignment)を利用して下記のように記述することもできます。
import { useRouter } from "next/router";
export default function Color() {
  const router = useRouter();
  const { name, color } = router.query
  return <h1>{ name }の{ color }カラーです</h1>;
}

### prefetchについて
リンクがブラウザのviewport(ビューポート)(見えてるところ、スマホ、パソコンの一面)に入ると自動でリンク先のJavaScriptファイルのダウンロードを行う

問題点
ユーザーにとっては見る気がないかもしれないリソースもフェッチしていること

このリソースのプリフェッチは余分なバイトを消費するので、大量のメモリが必要になったり、ユーザーが通信量を抑えたい（データセーバーモード）設定をしている場合はそれを考慮しなければならない
[参考サイト](https://uga-box.hatenablog.com/entry/2022/02/08/000000)