import Link from "next/link";

export default function Home () {
  return (
    <div>
      <h1 className="text-2xl font-bold" >This is home page</h1>
      <Link href="/blog" >Blog</Link>
      <Link href="/products" >Products</Link>
    </div>
  )
}