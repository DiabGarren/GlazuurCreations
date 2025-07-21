import connectDb from "@/lib/connectDb";
import { createErrorResponse } from "@/lib/utils";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();

        const products = await Product.find({});

        const response = {
            status: "success",
            data: products,
            length: products.length,
        };

        return new NextResponse(JSON.stringify(response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return createErrorResponse(error.message, 500);
    }
}
