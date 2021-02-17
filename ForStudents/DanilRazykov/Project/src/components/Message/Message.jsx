import React from 'react';
import ReactDom from 'react-dom';
import './style.scss';


export default props => {
    const {name, text} = props;

    return <div className='message'>
        <span className='name'><b>{name}:</b></span>
        <span className='text'>{text}</span>
    </div>;
}