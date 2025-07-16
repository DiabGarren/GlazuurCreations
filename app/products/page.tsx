"use client";
import Back from "@/components/back";
import Body from "@/components/body";

export default function Home() {
    return (
        <Body active={"products"}>
            <Back callback="./" />
            <h2 className="text-center">All Products</h2>
        </Body>
    );
}
