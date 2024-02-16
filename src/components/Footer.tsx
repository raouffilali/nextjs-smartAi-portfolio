import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="fap-3 mx-auto flex max-w-3xl p-3">
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
