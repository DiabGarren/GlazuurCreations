/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Body({
    active,
    children,
}: {
    active: string;
    children: React.ReactNode;
}) {
    const [nav, setNav] = useState(false);
    return (
        <>
            <header className="grid grid-cols-[75px_1fr_75px] items-center">
                <Link className="relative text-center" href={"./"}>
                    <h1 className="logo text-[50px] leading-[85px] mt-[-10px]">
                        G
                    </h1>
                </Link>
                <div className="mx-auto text-[25px]">
                    <h1 className="">Glazuur</h1>
                    <h1 className="ml-[15px]">Creations</h1>
                </div>
                <button
                    className="cursor-pointer"
                    onClick={() => {
                        nav ? setNav(false) : setNav(true);
                    }}
                >
                    <svg width={75} height={70}>
                        <line
                            x1={15}
                            y1={20}
                            x2={55}
                            y2={20}
                            strokeWidth={6}
                            stroke="white"
                            strokeLinecap="round"
                            className={`${nav == true ? "hidden" : "block"}`}
                        />
                        <line
                            x1={15}
                            y1={35}
                            x2={55}
                            y2={35}
                            strokeWidth={6}
                            stroke="white"
                            strokeLinecap="round"
                            className={`${nav == true ? "hidden" : "block"}`}
                        />
                        <line
                            x1={15}
                            y1={50}
                            x2={55}
                            y2={50}
                            strokeWidth={6}
                            stroke="white"
                            strokeLinecap="round"
                            className={`${nav == true ? "hidden" : "block"}`}
                        />
                        <line
                            x1={20}
                            y1={20}
                            x2={50}
                            y2={50}
                            strokeWidth={6}
                            stroke="white"
                            strokeLinecap="round"
                            className={`${nav == true ? "block" : "hidden"}`}
                        />
                        <line
                            x1={20}
                            y1={50}
                            x2={50}
                            y2={20}
                            strokeWidth={6}
                            stroke="white"
                            strokeLinecap="round"
                            className={`${nav == true ? "block" : "hidden"}`}
                        />
                    </svg>
                </button>
                <nav className={`nav ${nav ? "block" : "hidden"} col-[1/4]`}>
                    <ul className="flex-block h-[100%] w-[100%] items-center">
                        <li className={`${active == "home" ? "active" : ""}`}>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li
                            className={`${
                                active == "products" ? "active" : ""
                            }`}
                        >
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li className={`${active == "about" ? "active" : ""}`}>
                            <Link href={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="m-[20px_10px]">{children}</main>
            <footer className="text-center h-[90px] py-[15px]">
                <p className="text-[22px]">&copy; 2025 Glazuur Creations</p>
                <p className="text-[16px] pt-[10px]">
                    Web Design - Garren Diab
                </p>
            </footer>
        </>
    );
}
