import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
