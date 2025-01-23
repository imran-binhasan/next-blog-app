import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Header = async () => {
  const user = await getKindeServerSession();
  return (
    <header className="bg-gray-200">
      <div className="flex justify-between items-center px-10 py-4">
        <div>NextBlog</div>
        <ul className="flex space-x-3 justify-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/profile">Profile</Link>
          {user ? (
            <>
              <LogoutLink>Logout</LogoutLink>
            </>
          ) : (
            <>
              <LoginLink>Login</LoginLink>
              <RegisterLink>Signup</RegisterLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
