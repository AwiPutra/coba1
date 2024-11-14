// MainScreens.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Transaksi from './transaksi/Transaksi';
import Pengeluaran from './pengeluaran/Pengeluaran';
import Pemasukan from './pemasukkan/Pemasukkan';
import Laporan from './laporan/Laporan';
import Kas from './kas/Kas';
import User from './user/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function MainNavigator({setIsAuthenticated}) {
  return (
    <Drawer.Navigator
      initialRouteName="Transaksi"
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      screenOptions={({route}) => ({
        drawerActiveBackgroundColor: '#53CC34FF',
        drawerActiveTintColor: '#243D1EFF',
        drawerInactiveTintColor: '#333',
        drawerIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Transaksi':
              iconName = 'cash-register';
              break;
            case 'Pengeluaran':
              iconName = 'currency-usd-off';
              break;
            case 'Pemasukan':
              iconName = 'currency-usd';
              break;
            case 'Laporan':
              iconName = 'file-document';
              break;
            case 'Kas':
              iconName = 'bank';
              break;
            case 'User':
              iconName = 'account';
              break;
            default:
              iconName = 'circle';
          }
          return (
            <Icon name={iconName} size={size || 24} color={color || 'black'} />
          );
        },
      })}>
      <Drawer.Screen name="Transaksi" component={Transaksi} />
      <Drawer.Screen name="Pengeluaran" component={Pengeluaran} />
      <Drawer.Screen name="Pemasukan" component={Pemasukan} />
      <Drawer.Screen name="Laporan" component={Laporan} />
      <Drawer.Screen name="Kas" component={Kas} />
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}
