import Link from "next/link";

export default function Products() {
    return (
        <div className="flex flex-col gap-3" >
            <Link href="/" >Home</Link>
            <h2 className="text-xl font-semibold" ><Link href="products/1" >Product 1</Link></h2>
            <h2 className="text-xl font-semibold" ><Link href="products/2" >Product 2</Link></h2>
            <h2 className="text-xl font-semibold" ><Link href="products/3" replace >Product 3</Link></h2>
            <h2 className="text-xl font-semibold" ><Link href="products/4" >Product 4</Link></h2>
        </div>
    )
}