// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>We couldn’t find the page you’re looking for.</p>
      <Link href="/">
        <div style={{ color: "blue" }}>Go back to Home</div>
      </Link>
    </div>
  );
}
