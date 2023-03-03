// export default function Home() {
//   return <h1>商品一覧です</h1>;
// }

import {useRouter} from "next/router";
export default function Name() {
  const router = useRouter();
  console.log(router.query);
  return (<div>
    <h1>商品{router.query.Name}のページ</h1>
    <h2>商品{router.pathname}のページ</h2>
  </div>
  )
}