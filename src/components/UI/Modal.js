import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';

const Backdrops = props => {
return <div className={classes.backdrop} onClick={props.onclose}/>
}
const ModalOverlay = props => {
return (<div className={classes.modal}>
    <div className={classes.content}> {props.children}</div>
     </div>); 
}
const portalElement = document.getElementById('overlays');
const Modal = props => {
    return (
   <Fragment>
       {ReactDom.createPortal(<Backdrops onclose={props.onclose}/>, portalElement)}
       {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
   </Fragment>
    );
}
export default Modal;