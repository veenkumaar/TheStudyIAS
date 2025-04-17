import React from "react";
import { Image } from "react-native";
import { styles } from "../core/theme";

export default function Logo() {
    return (
        <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo} />
    );
    }