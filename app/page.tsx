"use client";
import Body from "@/components/body";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
    return (
        <Body active={"home"}>
            <Button>
                <Link href={"/products"}>View all products</Link>
            </Button>
        </Body>
    );
}
