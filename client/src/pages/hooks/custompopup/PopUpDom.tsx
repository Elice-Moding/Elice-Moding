import { ReactNode } from 'react';
import ReactDom from 'react-dom';
 
interface PopupDomProps {
    children: ReactNode;
}

const PopupDom = ({ children }:PopupDomProps) => {
    const el = document.getElementById('PopUpDom') as HTMLButtonElement | null;

    if (!el) {
        throw new Error('Element with id "PopUpDom" not found in the document.');
      }

    return ReactDom.createPortal(children, el);
};
 
export default PopupDom;