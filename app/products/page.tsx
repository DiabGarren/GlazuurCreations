"use client";
import Back from "@/components/back";
import Body from "@/components/body";
import { Product as Metadata } from "@/lib/product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/metadata")
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "success") {
                        setCategories(data.data[0].categories);
                    }
                });
        };
        getCategories();
    }, []);

    return (
        <Body active={"products"}>
            <Back callback="./" />
            <h2 className="text-center text-[22px]">All Categories</h2>
            <div className="flex-col mt-[15px] mx-auto justify-center">
                {categories.length > 0 ? (
                    <>
                        {categories.map((category: string, index: number) => {
                            return (
                                <Link
                                    className="block hover:bg-(--secondary) hover:text-white hover:underline text-center py-[15px] rounded-[5px] text-[18px] border-y-[1px]
                                    border-(--secondary) first-of-type:border-t-[0px] last-of-type:border-b-[0px]"
                                    href={"/products/category/" + category}
                                    key={index}
                                >
                                    {category}
                                </Link>
                            );
                        })}
                    </>
                ) : (
                    <h2>No Products</h2>
                )}
            </div>
        </Body>
    );
}
