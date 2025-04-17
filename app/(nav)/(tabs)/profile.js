import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { Button } from 'react-native-paper';
import Logo from '../../helper/logo';
import { styles } from '../../core/theme';
import { router } from 'expo-router'
import AppAlert from '../../helper/appAlert';

export default function Profile() {
  const handleLogout = () => {
    AppAlert.confirm('Logout', 'Are you sure?', () => { router.push('/'); }, () => { /* cancel logic */ });
  };
  const handleSettings = () => {
    console.log('Settings opened');
  };
  const handleChangePassword = () => {
    console.log('Change password opened');
  };
  const handleNameChange = () => {
    console.log('Name change opened');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Profile' }} />
      <Logo />
      <Button
        mode="contained"
        onPress={handleNameChange}
        style={styles.settingButton}
        labelStyle={{ textAlign: 'left', width: '90%' }}
      >
        Change Name
      </Button>
      <Button
        mode="contained"
        onPress={handleChangePassword}
        style={styles.settingButton}
        labelStyle={{ textAlign: 'left', width: '90%' }}
      >
        Change Password
      </Button>
      <Button
        mode="contained"
        onPress={handleSettings}
        style={styles.settingButton}
        labelStyle={{ textAlign: 'left', width: '90%' }}
      >
        Settings
      </Button>
      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.settingButton}
        labelStyle={{ textAlign: 'left', width: '90%' }}
      >
        Logout
      </Button>
    </View>
  );
}
