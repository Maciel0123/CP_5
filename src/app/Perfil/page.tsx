"use client"
import { Header } from "@/componets/Header/Header";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
import { useVerifyLogin } from "../../helpers/useVerifyLogin";

export default function Perfil() {
    useVerifyLogin()
    const { userName } = useContext(UserContext) ?? {};

    return <>
        <Header title="Perfil" userName={userName} />
        <h2>
            <br />Olá, Seja Bem-vindo(a) {userName}</h2>
    </>
}