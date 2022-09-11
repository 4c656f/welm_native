import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {indexStyleVariables} from "../../../utils/styles";
import {FC, useEffect} from "react";


interface HomeIconProps {
    focus: boolean;

}

const PostsIcon:FC<HomeIconProps> = ({focus}) => {



    return (

        <Svg
            width={17}
            height={17}
            fill={focus?indexStyleVariables.defaultElementActiveColorOpposite:"none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3.542 5.525c0-1.19 0-1.785.232-2.24.203-.4.528-.725.928-.928.455-.232 1.05-.232 2.24-.232h3.117c1.19 0 1.785 0 2.24.232.4.203.724.528.928.928.232.455.232 1.05.232 2.24v9.35L8.5 12.042l-4.958 2.833v-9.35Z"
                stroke={focus?indexStyleVariables.defaultElementActiveColorOpposite:indexStyleVariables.defaultElementColorOpposite}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>

    );
};

export default PostsIcon;




