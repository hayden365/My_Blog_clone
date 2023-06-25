import { getPostDetail } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

type Context = {
	params: { postId: string };
};

const userId = "ysmh100";

export async function GET(_: NextRequest, context: Context) {
	const { postId } = context.params;

	const postDetail = await getPostDetail(userId, postId).then(data =>
		NextResponse.json(data),
	);

	return postDetail;
}