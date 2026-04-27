import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto mt-6 gap-4">
      <div></div>
      <ul className="flex justify-between items-center gap-5 text-gray-700 font-semibold">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Image src={avatar} alt="Avatar" width={40} height={40} />
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
