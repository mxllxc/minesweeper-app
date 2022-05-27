import React, { createContext, useState, useContext} from 'react';

const BoardContext = createContext({})

function BoardProvider({ children }) {
    return (
        <BoardContext.Provider value={{ blockSize: 30 }}>
            {children}
        </BoardContext.Provider>
    )
}

function useBoard() {
    const context = useContext(BoardContext);

    return context;
}

export { BoardProvider, useBoard }