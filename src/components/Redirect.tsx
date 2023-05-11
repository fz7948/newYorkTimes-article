import { useLocation } from "react-router-dom";

export default function Redirect() {
  const location = useLocation();
  const { url } = location.state as { url: string };
  if (url) window.location.href = url;

  return null;
}
