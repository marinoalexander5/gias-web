import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { GiDolphin } from 'react-icons/gi';


export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00ACBC' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px' )};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#00ACBC')};
    }
`;

export const LinkButton = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00ACBC' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px' )};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#00ACBC')};
    }
`;

export const ScrollTopButton = styled(LinkS)` 
    background: #00ACBC;
    color: #fff;
    border-radius: 50%;
    position: fixed; 
    height: 50px;
    width: 50px;
    right: 50px;
    bottom: 50px;
    opacity: ${({scrollBtn}) => (scrollBtn ? '100%' : '10%' )};
`;

export const DolphinIcon = styled(GiDolphin)`
    height: 30px;
    width: 30px;
    margin: 10px;
    animation: ${({rotateIcon}) => (rotateIcon ? 'spin 1s 1;' : 'none' )};

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        } 
    }
`;