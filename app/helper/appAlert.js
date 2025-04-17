import { Platform, Alert } from 'react-native';

const AppAlert = {
  show: (title, message, buttons = [{ text: 'OK' }]) => {
    if (Platform.OS === 'web') {
      // Only show the message and title, no custom buttons on web
      window.alert(`${title ? title + '\n\n' : ''}${message}`);
      // Optionally, you can invoke the first button's onPress callback if it exists
      if (buttons[0] && typeof buttons[0].onPress === 'function') {
        buttons[0].onPress();
      }
    } else {
      Alert.alert(title, message, buttons);
    }
  },

  confirm: (title, message, onConfirm, onCancel) => {
    if (Platform.OS === 'web') {
      const result = window.confirm(`${title ? title + '\n\n' : ''}${message}`);
      if (result) {
        if (typeof onConfirm === 'function') onConfirm();
      } else {
        if (typeof onCancel === 'function') onCancel();
      }
    } else {
      Alert.alert(
        title,
        message,
        [
          { text: 'Cancel', onPress: onCancel, style: 'cancel' },
          { text: 'OK', onPress: onConfirm },
        ]
      );
    }
  },
};

export default AppAlert;
