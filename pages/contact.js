import Link from "next/link";

const Contact = () => (
  <div className="container mx-auto mt-8">
    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
    <p className="mb-4">You can reach me via email or phone:</p>
    <ul className="list-disc ml-8 mb-4">
      <li>Email: elsoulimontassar@gmail.com</li>
      <li>Phone: +216 94 266 854</li>
    </ul>
    <p>Feel free to connect with me!</p>
    <div className="mt-4">
      <Link href="/">
        <span className="text-blue-600 hover:underline">Go back to Home</span>
      </Link>
    </div>
  </div>
);

export default Contact;
