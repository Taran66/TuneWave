import { createContext } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const contextValue = {

    }

    return (
        <PlayerContextProvider value = {contextValue}>
            {props.children}
        </PlayerContextProvider>
    )
}

export default PlayerContextProvider;
