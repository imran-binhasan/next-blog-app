import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect immediately before rendering
  if (!user) {
    redirect("/api/auth/login");
  }

  console.log(user.picture)
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-[40vh]">
       <img className="w-12 h-12 rounded-full" href={user.picture}/>
      <h2 className="text-3xl">hello!</h2>
      <p className="text-2xl">Welcome to your profile, {user.given_name}.</p>
    </div>
  );
}
