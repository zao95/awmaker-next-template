import styled from 'styled-components'
import { palette } from 'utils'

interface BoxProps {
    $gradientFrom: string
    $gradientTo: string
    $darkMode: boolean | null
}
export const Box = styled.div<BoxProps>`
    position: relative;
    width: 100%;
    max-width: 240px;
    height: 320px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 25%;
        width: 50%;
        height: 100%;
        text-decoration: none;
        background: ${palette.white};
        border-radius: 8px;
        transform: skewX(15deg);
        transition: all 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 35%;
        width: 50%;
        height: 100%;
        background: ${palette.white};
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);
        filter: blur(30px);
    }
    &::before,
    &::after {
        transition: all 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
        background: ${({ $gradientFrom, $gradientTo }) =>
            `linear-gradient(315deg, ${$gradientFrom}, ${$gradientTo})`};
    }
    &:hover {
        &::before,
        &::after {
            transform: skewX(0deg);
            left: 7.5%;
            width: 85%;
        }
    }
    > span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        pointer-events: none;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border-radius: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(3px);
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: all 0.35s cubic-bezier(0.47, 1.64, 0.41, 0.8);
            animation: animate 2s ease-in-out infinite;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0;
            height: 0;
            border-radius: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(3px);
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: all 0.45s cubic-bezier(0.47, 1.64, 0.41, 0.8);
            animation: animate 2s ease-in-out infinite;
            animation-delay: -1s;
        }
    }
    &:hover > span::before {
        top: -15%;
        left: 5%;
        width: 30%;
        height: 30%;
        opacity: 1;
    }
    &:hover > span::after {
        bottom: -15%;
        right: 5%;
        width: 30%;
        height: 30%;
        opacity: 1;
    }
    @keyframes animate {
        0%,
        100% {
            transform: translateY(15px);
        }

        50% {
            transform: translate(-15px);
        }
    }
    > .content {
        position: relative;
        left: 0;
        padding: 20px 40px;
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        transition: all 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
        color: ${({ $darkMode }) =>
            $darkMode === true ? palette.white : palette.stone[900]};
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        h2 {
            font-size: 1.7em;
            color: ${({ $darkMode }) =>
                $darkMode === true ? palette.white : palette.stone[900]};
            margin-bottom: 10px;
            font-weight: 900;
        }
        p {
            font-size: 0.9em;
            margin-bottom: 10px;
            line-height: 1.2em;
            font-weight: 400;
            overflow: hidden;
            opacity: 0;
            height: 0;
            transition: all 0.3s ease-in;
        }
        a {
            display: inline-block;
            font-size: 0.8em;
            color: ${({ $darkMode }) =>
                $darkMode === true ? palette.stone[900] : palette.white};
            background: ${({ $darkMode }) =>
                $darkMode === true ? palette.white : palette.stone[900]};
            padding: 10px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 900;
            margin-top: 5px;
            transition: all 0.3s;
            &:hover {
                box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
            }
        }
    }
    &:hover .content {
        left: 0;
        padding: 40px 40px;
        p {
            opacity: 1;
            height: auto;
        }
    }
`
