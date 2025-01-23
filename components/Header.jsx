import Link from "next/link";
import {
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser(); // Ensure you call getUser() correctly

  return (
    <header className="bg-gray-200">
      <div className="flex justify-between items-center px-10 py-4">
        <div>
          <h2 className="text-xl font-medium">NextBlog</h2>
        </div>
        <ul className="flex space-x-3 justify-center">
          <Link className="hover:text-orange-500 transition" href="/">Home</Link>
          {user?
          <>
          <Link className="hover:text-orange-500 transition" href="/profile">Profile</Link>
          </>:
          <>
          <LoginLink className="hover:text-orange-500 transition">Profile</LoginLink>
          </>}
        </ul>
        <ul>
        {user ? (
            <LogoutLink className=" transition px-3 py-1.5 text-white bg-orange-500 hover:bg-orange-600 rounded-md border">Logout</LogoutLink>
          ) : (
            <>
              <LoginLink  className=" transition px-3 py-1.5 text-white bg-orange-500 hover:bg-orange-600 rounded-md border">Login</LoginLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
