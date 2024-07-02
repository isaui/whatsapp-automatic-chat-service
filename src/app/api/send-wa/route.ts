import { sendMessageToWA } from "@/utils/send-message";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {message, phoneNo} = await request.json();
    await sendMessageToWA(phoneNo, message);
    return NextResponse.json({},{status: 200})
}