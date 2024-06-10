import { createContext } from "react";

export type GlobalScreen = {
    idScreen: Number,
}

const ScreenCommon = createContext<GlobalScreen>({
    idScreen: 0
});

export default ScreenCommon;