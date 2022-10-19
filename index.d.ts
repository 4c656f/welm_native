import {IHomeStackParams} from "./src/types/IHomeStackParams";

declare global {
    namespace ReactNavigation {
        type HomeParamList = IHomeStackParams
    }
}