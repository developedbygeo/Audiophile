import { keyframes } from 'styled-components';

export const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: translateX(0%)
    }
100% {
    opacity: 0;
    transform: translateX(150%)
    }`;

export const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateX(-150%)
    }
25%{
    opacity: 0.25;
    transform: scale(1.25)
}
50%{
    opacity: 0.5;
    transform: scale(1.5)
}
100% {
    opacity: 1;
    transform: scale(2) translateX(0%);
    }`;
