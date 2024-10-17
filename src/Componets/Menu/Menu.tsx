"use client";

import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";
import { StyledLi, StyledLink, StyledNav, StyledUl } from "./Menu.style";

export const Menu = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <StyledLink href={'/'}>
                        Inicio
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <StyledLink href={'/busca'}>
                        Busca
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <StyledLink href={'/favoritos'}>
                        Favoritos
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <StyledLink href={'/perfil'}>
                        Perfil
                    </StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};