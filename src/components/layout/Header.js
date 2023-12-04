import Link from "next/link";

export default function Header(params) {
  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href="/">
            ST PIZZA
          </Link>
          <Link href="/">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href="/login">Login</Link>
          <Link
            className="bg-primary text-white text-center rounded-full w-20 p-1 hover:bg-secondary hover:text-gray-700"
            href="/register"
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
}
