import { useState } from 'react';
import Image from "next/image";
import styled from "styled-components";

const HeaderItem = ({ title, image, activeImage, onClick, width, height, isActive }) => {
    return (
        <StyledHeaderItem onClick={onClick} isActive={isActive}>
            {title}
            <Image 
                src={isActive ? activeImage : image} // isActive 상태에 따라 이미지 변경
                alt={`${title} icon`} 
                width={width} 
                height={height} 
            />
        </StyledHeaderItem>
    );
};

export default HeaderItem;

const StyledHeaderItem = styled.div`
    width: 156px;
    height: 52px;
    color: ${({ isActive }) => (isActive ? "#0DA573" : "#BABBC2")};
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    gap:8px;

    &:hover {
        background-color: #FBFBFC;
    }
`;
