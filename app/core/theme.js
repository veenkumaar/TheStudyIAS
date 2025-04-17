import { DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#2F2F2F",
    primary: "#4C4C9D",
    secondary: "#1F2732",
    error: "#ED1C24",
  },
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#ffffff",
    primary: "#4C4C9D",
    secondary: "#1F2732",
    error: "#ED1C24",
  },
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      },
      text: {
        fontSize: 20,
        color: "#333",
        padding: 10,
        textAlign: "center",
      },
      logo: {
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: "#007BFF",
        width: '80%',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        borderWidth: 1,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '80%',
    },
    link: {
        color: "#007BFF",
        textDecorationLine: "underline",
        marginTop: 10,
    },
    settingButton:{
      width: '80%',
      marginTop: 10,
      padding: 5,
      textAlign: 'left',
    }
  });