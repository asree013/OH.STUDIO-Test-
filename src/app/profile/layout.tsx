import AppNav from "@/components/AppNav"
import { metadata } from "../layout"

metadata.title = 'Profile - OH.STUDIO'


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AppNav />
            {children}
        </section>
    )
}