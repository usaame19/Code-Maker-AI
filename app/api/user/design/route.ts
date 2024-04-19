import { getServerSession } from "next-auth";
import OpenAi from "openai";
import { AuthOptions } from "../../auth/[...nextauth]/AuthOptions";
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../../prisma/client'
const openAI = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  if (!session || !session.user) {
    return NextResponse.json("Unauthorized access please Login first", {
      status: 403
    });
  }

  const user = session.user;
  const userInfo = await prisma.user.findUnique({
    where: {
      email: user.email!,
    },
  });
  if(!userInfo){
    return NextResponse.json("User not found", {
      status: 404
    });
  }

  try {
    const { svg } = await request.json();
    if(!svg){
      return NextResponse.json("image not provided", {
        status: 400
      });
    }
    
} catch (error) {
    
  }
}
