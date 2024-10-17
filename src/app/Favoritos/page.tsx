"use client";
import { Header } from "@/componets/Header/Header";
import UserContext from "@/context/UserContext";
import { useVerifyLogin } from "@/helpers/useVerifyLogin";
import { useContext } from "react";

export default function Favoritos() {
    useVerifyLogin();
    const { userName } = useContext(UserContext) ?? {};

    return (
        <>
            <Header title="Favoritos" userName={userName} />
        </>
    );
}