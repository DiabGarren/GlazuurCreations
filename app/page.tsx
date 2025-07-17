"use client";
import Body from "@/components/body";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
    return (
        <Body active={"home"}>
            <Button className="w-[100%] bg-[#1a885c] text-white text-[16px]">
                <Link href={"/products"}>View all products</Link>
            </Button>
        </Body>
    );
}
