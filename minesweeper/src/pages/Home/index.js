import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { useBoard } from "../../hooks/board";

export default function Home() {
    const board = useBoard();
    return (
        <SafeAreaView>
            <Text>oi</Text>
            <Text>{board.blockSize}</Text>
        </SafeAreaView>
    )
}