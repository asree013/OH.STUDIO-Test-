import AppNav from "@/components/AppNav"
import { metadata } from "../layout"

metadata.title = 'Contact - OH.STUDIO'


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