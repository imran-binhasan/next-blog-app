import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
        redirect("/api/auth/login")
    }
    return (
        <div>
            <h2>Hello !</h2>
            <p>Welcome to your profile {user.given_name}</p>
        </div>
    );
};

export default Profile;