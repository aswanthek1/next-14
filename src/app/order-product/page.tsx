"use client";

import { useRouter } from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
        // router.back();
        // router.replace('/');
    }
    return (
        <div>
            <button className="bg-green-400" onClick={handleClick} >Place order</button>
        </div>
    )
}