import { useRouter } from "next/router";
export default function Color() {
  const router = useRouter();
  console.log(router.query);
  return (
    <h1>色：{router.query.color}の{router.query.Name}</h1>
  )
}