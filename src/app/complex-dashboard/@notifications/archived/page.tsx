import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            <div>Archived Notifications</div>
            <div className="mr-5">
                <Link className="mr-5 text-blue-400" href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    )
}