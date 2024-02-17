import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export default async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundImage: "url(https://dhanush.wtf/media/bjo4io6bgum.png)",
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 190,
            marginTop: 100,
            display: "flex",
            fontSize: 130,

            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "140px",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginLeft: 100,
            marginRight: 190,
            marginTop: 30,
            display: "flex",
            opacity: 0.5,
            fontSize: 50,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "60px",
            whiteSpace: "pre-wrap",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
