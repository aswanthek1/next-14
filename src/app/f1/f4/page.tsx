import Link from "next/link";

export default function F4() {
    return (
        <div>
            <h1>F4 page</h1>
            <Link href="/f1/f3" >F3 page</Link>
            <Link href="/about" >ABOUT</Link>
        </div>
    )
}