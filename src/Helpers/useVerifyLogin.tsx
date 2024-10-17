import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

export const useVerifyLogin = () => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext);

    useEffect(() => {
        const sessionData = JSON.parse(sessionStorage.getItem("userToken"));
        if (sessionData) {
            const userData = jwtDecode(sessionData.token);
            setUserName(userData.name);
        } else {
            router.push(`/login`)
        }
    }, [setUserName]);
};