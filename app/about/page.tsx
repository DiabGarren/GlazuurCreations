"use client";
import Body from "@/components/body";
import { Button } from "@heroui/react";

export default function Home() {
    return (
        <Body active={"about"}>
            <Button>button</Button>
        </Body>
    );
}
