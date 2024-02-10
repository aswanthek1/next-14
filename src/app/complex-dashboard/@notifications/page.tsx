import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <div>Notifications</div>
            <div>
                <Link className="mr-5 text-blue-400" href="/complex-dashboard/archived">Archived</Link>
            </div>
        </Card>
    )
}