import { useDaumPostcodePopup } from 'react-daum-postcode';

interface PostcodProps{
  onChangePostcode: (address: string) => void,
  onChangeAddress: (address: string) => void,
}

const Postcode = (props: PostcodProps) => {
  const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.onChangeAddress(fullAddress);
    props.onChangePostcode(data.zonecode)
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button className='bg-[#788FE2] w-[180px] h-14 ps-8 pe-8 outline-none font-bold rounded-[24px]' onClick={handleClick}>주소검색
    </button>
  );
};

export default Postcode;