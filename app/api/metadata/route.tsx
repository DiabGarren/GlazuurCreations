import connectDb from "@/lib/connectDb";
import { createErrorResponse } from "@/lib/utils";
import Metadata from "@/models/metadata";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();

        const metadata = await Metadata.find({});

        const response = {
            status: "success",
            data: metadata,
            length: metadata.length,
        };

        return new NextResponse(JSON.stringify(response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return createErrorResponse(error.message, 500);
    }
}
