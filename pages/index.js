import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";

const Home = () => (
  <div className="container mx-auto mt-8 text-center">
    <div className="mb-4">
      <Image
        src={profilePic}
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h1 className="text-4xl font-bold mt-4">Welcome to My Portfolio</h1>
    </div>
    <p className="text-lg mb-4">
      Hello, I'm Montassar souli, a passionate developer ready to showcase my
      skills and projects.
    </p>
    <div className="flex justify-center">
      <Link href="/about">
        <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          About Me
        </span>
      </Link>
      <Link href="/projects">
        <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
          My Projects
        </span>
      </Link>
      <Link href="/contact">
        <span className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </span>
      </Link>
    </div>
  </div>
);

export default Home;
