import Link from "next/link";

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between">
      <div className="text-white font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <Link href="/">
          <span className="text-white">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-white">About</span>
        </Link>
        <Link href="/projects">
          <span className="text-white">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="text-white">Contact</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
