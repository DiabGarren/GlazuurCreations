"use client";
import Back from "@/components/back";
import Body from "@/components/body";
import { useState } from "react";

export default function Home() {
    const [items, setItems] = useState([]);
    return (
        <Body active={"products"}>
            <Back callback="./" />
            <h2 className="text-center text-[22px]">All Products</h2>
            <div className="mt-[15px]">
                {items.length > 0 ? <></> : <h2>No Products</h2>}
            </div>
        </Body>
    );
}
