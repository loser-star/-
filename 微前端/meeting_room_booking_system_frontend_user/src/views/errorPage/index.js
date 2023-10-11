import { useLocation } from "react-router-dom";
export default function ErrorPage() {
  const location = useLocation();
  console.log(location);
  return <div>ErrorPage loser</div>;
}
