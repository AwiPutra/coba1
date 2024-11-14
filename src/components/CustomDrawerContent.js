// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Add icons if desired

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      {/* Welcome Box */}
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>Selamat datang,</Text>
        <Text style={styles.userText}>Budi (admin)</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.menuItems}>
        <DrawerItemList {...props} />
      </View>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.setIsAuthenticated(false)}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f4f4f8',
  },
  welcomeBox: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  menuItems: {
    flex: 1,
    paddingHorizontal: 10,
  },
  logoutContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
