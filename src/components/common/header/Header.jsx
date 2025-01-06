import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderItem from './HeaderItem';

const Header = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(null); // 클릭된 항목의 상태

    const handleClick = (key, path) => {
        setChecked(key); // 클릭된 항목을 상태로 저장
        router.push(path); // 페이지 이동
    };

    return (
        <>
            <HeaderItem 
                title="홈" 
                image="/icons/home_default.svg" 
                activeImage="/icons/home_active.svg" // active 상태일 때 사용할 이미지
                width={24} 
                height={24} 
                isActive={checked === "home"} // "home"이 클릭되었을 때 스타일 변경
                onClick={() => handleClick("home", "/")} 
            />
            <HeaderItem 
                title="커뮤니티" 
                image="/icons/group_default.svg" 
                activeImage="/icons/group_active.svg" 
                width={24} 
                height={24} 
                isActive={checked === "community"} // "community" 클릭 시 스타일 변경
                onClick={() => handleClick("community", "/community")} 
            />
            <HeaderItem 
                title="굿즈거래" 
                image="/icons/store_default.svg" 
                activeImage="/icons/store_active.svg" 
                width={24} 
                height={24} 
                isActive={checked === "goods"} // "goods" 클릭 시 스타일 변경
                onClick={() => handleClick("goods", "/goods")} 
            />
            <HeaderItem 
                title="내 활동" 
                image="/icons/bookmark_default.svg" 
                activeImage="/icons/bookmark_active.svg" 
                width={24} 
                height={24} 
                isActive={checked === "my"} // "my" 클릭 시 스타일 변경
                onClick={() => handleClick("my", "/myactivity")} 
            />
        </>
    );
};

export default Header;
