import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {indexStyleVariables} from "../../../utils/styles";
import {FC, useEffect} from "react";


interface HomeIconProps {
    focus:boolean;
}

const HomeIcon:FC<HomeIconProps> = ({focus}) => {



    return (
        <Svg
            width={16}
            height={14}
            fill={focus?indexStyleVariables.defaultElementActiveColorOpposite:"none"}

            xmlns="http://www.w3.org/2000/svg"

        >
            <Path
                d="M1 3a2 2 0 0 1 2-2h1.075a2 2 0 0 1 1.396.568L6.64 2.707a2 2 0 0 0 1.396.568H13a2 2 0 0 1 2 2v5.1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Z"
                stroke={focus?indexStyleVariables.defaultElementActiveColorOpposite:indexStyleVariables.defaultElementColorOpposite}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default HomeIcon;