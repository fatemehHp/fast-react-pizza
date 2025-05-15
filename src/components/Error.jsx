import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h1>🥺 اُپس... یه مشکلی پیش اومد</h1>
      <p>{error.message || "یه ارور ناشناخته رخ داد"}</p>
    </div>
  );
}
