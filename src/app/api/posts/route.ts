import { getAllPostsOf } from "@/service/posts";
import { NextResponse } from "next/server";

export async function GET() {
	return getAllPostsOf().then(data => NextResponse.json(data));
}