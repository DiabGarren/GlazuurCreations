"use client";
import Back from "@/components/back";
import Body from "@/components/body";

export default function Home() {
    return (
        <Body active={"about"}>
            <Back callback="./" />
            <h1 className="text-center text-[22px]">About</h1>
        </Body>
    );
}
