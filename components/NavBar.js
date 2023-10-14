import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx global>{`
        nav {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          box-shadow: 0px 4px 2px -2px gray;
        }
        nav a {
          font-weight: 800;
          padding: 30px;
          opacity: 0.7;
          transition: opacity 0.3s ease-in-out;
        }
        nav a:hover {
          opacity: 1;
        }

        nav a.active {
          opacity: 1;
          font-size: 1.2em;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
