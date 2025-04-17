import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Logo from '../helper/logo';


export default function _layout() {
    return <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: 20
            },
        }}
        drawerContent={CustomDrawerContent}
    >        
    </Drawer>
}

function CustomDrawerContent(props:any) {
  return (
    <View
        style={{flex: 1}}
    >
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <Logo />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}