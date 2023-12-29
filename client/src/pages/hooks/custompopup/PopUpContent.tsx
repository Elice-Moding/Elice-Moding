interface PopupDomContentProps {
  getClose: (closePopup: boolean) => void;
}

function PopupContent(props: PopupDomContentProps) {
  const onClose = () => {
    props.getClose(false);
  };
  return (
      <div className="z-10 fixed top-0 left-0 w-full h-full bg-[#D9D9D9]">
        <div className="bg-[#D9D9D9]/[0.1] w-[600px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <p>This is Popup Title</p>
          <div>
            <button type="button" onClick={onClose}>
              close
            </button>
          </div>
        </div>
    </div>
  );
}

export default PopupContent;
