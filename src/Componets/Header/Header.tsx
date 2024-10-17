"use client";

import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { StyledH1, StyledHeader, Stylediv } from "./Header.style";

interface HeaderProps {
    title: string
    userName: string
}

export const Header = ({ title, userName }: HeaderProps) => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext)

    const handleLogin = () => {
        router.push('/login')
    }

    const handleLogout = () => {
        sessionStorage.removeItem("userToken")
        setUserName(null)
        router.push('/login')
    }

    return (
        <StyledHeader>
            <StyledH1>{title}</StyledH1>
            <Stylediv>
                {userName
                    ? (<>
                        <span>{userName}</span>
                        <button className="button" onClick={handleLogout}>Sair</button>
                    </>)
                    : (
                        <button className="button" onClick={handleLogin}>Login</button>
                    )
                }
            </Stylediv>
        </StyledHeader>
    )
}