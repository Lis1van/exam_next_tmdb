import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {ThemeProvider} from "next-themes";
import React from "react";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="h-screen overflow-hidden ">
        <ThemeProvider defaultTheme='system' attribute='class'>
            <Navbar/>
            <div className="grid grid-cols-1 sm:grid-cols-[250px,1fr] h-full">
                <Sidebar/>
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
