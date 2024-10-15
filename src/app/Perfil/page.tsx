"use client"
import { Header } from "@/components/Header/Header";
import UserContext from "@/context/UserContext";
import { useVerifyLogin } from "@/Helpers/useVerifyLogin";
import { useContext } from "react";

export default function Perfil(){
    useVerifyLogin()
    const { userName } = useContext(UserContext) ?? {};
    
    return <>
        <Header title="Perfil" userName={userName} />
    </>
}