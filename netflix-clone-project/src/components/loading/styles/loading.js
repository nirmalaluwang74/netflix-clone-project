import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`
export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`
export const Spinner = styled.div`
    position: fixed;
    width: 70%;
    height: 70%;
  
    z-index: 999;

    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-image: url(https://cdn1.iconfinder.com/data/icons/mobile-device/512/reload-loading-process-blue-round-512.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: 150px;
        margin-left: 75px;
        width: 80px;
        height: 80px;
        animation-name: spin;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @-ms-keyframe spin {
        from {
            -ms-transform: rotate(0deg);         
        }
        to {
            -ms-transform: rotate(360deg)
        }
    }

    @-moz-keyframes spin {
        from {
            -moz-transform: rotate(0deg);        
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Picture = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10%;
    margin-top: 10px;
    margin-left: 22px;
`;