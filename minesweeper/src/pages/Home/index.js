import React from "react";
import { View } from "react-native";

import { useBoard } from "../../hooks/board";

export default function Home() {
    const board = useBoard();
    return (
        <View>
            <h1>oi</h1>
            <h1>{board.blockSize}</h1>
        </View>
    )
}