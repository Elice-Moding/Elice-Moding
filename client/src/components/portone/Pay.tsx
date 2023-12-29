import * as styled from "./Pay.styles"

const impUid = process.env.REACT_APP_IMP_UID;

function Payment(props:any) {
  function onClickPayment(data:any) {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP?.init(impUid); 
    const inicis = 'html5_inicis';
    const tosspay = 'tosspay';

    /* 3. 결제 창 호출하기 */
    IMP?.request_pay(data, callback);
  }

  /* 2. 콜백 함수 정의하기 */
  function callback(response:any) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <styled.PayBtn onClick={()=>onClickPayment(props.data)}>결제하기</styled.PayBtn>)
}

export default Payment;