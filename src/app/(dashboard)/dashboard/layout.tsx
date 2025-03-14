import DashNav from "@/components/DashNav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <DashNav />
            {children}
        </div>
    );
}
