import {IHomeStackParams} from "./src/types/IHomeStackParams";




declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}



declare global {
    namespace ReactNavigation {
        type HomeParamList = IHomeStackParams
    }
}