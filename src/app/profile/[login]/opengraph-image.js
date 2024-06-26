import { ImageResponse } from "next/og";

const apiUrl = process.env.API_URL;

export const contentType = "image/png";

export default async function Image({ params }) {
  const resp = await fetch(`${apiUrl}/users/${params.login}/badge`);
  const data = await resp.text();

  return new ImageResponse(
    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(data)}`} />
  );
}
