## memo 
### 関数の表示方法一覧

#### 関数表示
function About() {
  return (
    <h1>About Page</h1>
  )
}
export default About


#### アロー関数
const About = () => {
  return (
    <h1>About Page</h1>
  )
}
export default About

### リンクの設定
index.js, about.jsとproducts の下に[name].jsファイルを作成しましたが、作成した各ページに対してリンクの設定を行っていないためページを移動するためにはブラウザのURLを手動で書き換える以外に方法がありません。リンクを利用してページ移動ができるようにLinkコンポーネントの設定を行います。

#### Linkコンポーネントとaタグ
今、最新のnextは、Linkコンポーネントの中にaタグは要らない。（てかあるとエラー出る）なぜなら。Linkコンポーネントの中身は自動的にaタグが補完できるように設定されているから。[参考サイト](https://qiita.com/FumioNonaka/items/0e97dca13528fb3366a0)