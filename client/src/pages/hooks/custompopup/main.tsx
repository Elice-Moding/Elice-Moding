import PopupDom from './PopUpDom';
import PopupContent from './PopUpContent';
import { useState } from 'react';
 
function Main() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const openPopup = () =>{
        setIsOpenPopup(true);
    }

    const closePopup = () =>{
        setIsOpenPopup(false);
    }

    return (
        <div>
            <div className='flex justify-center relative'>
                <button className='bg-[#D9D9D9]/[0.1] text-white w-[100px] h-[60px]'
                    id="PopUpDom"
                    onClick={openPopup}>
                    커스텀팝업
                </button>
                {isOpenPopup &&
                    <PopupDom>
                        <PopupContent getClose={closePopup} />
                    </PopupDom>
                }
            </div>
        </div>
    );
}

export default Main;