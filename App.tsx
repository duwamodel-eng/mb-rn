import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function HomeScreen(props: any) {
    const navigation = props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('hoidanit')}
            title="go to detail"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('hoidanit',
              { userId: 1, name: 'eric' }
            )}
            title="go user id=1"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate('hoidanit',
              { userId: 2, name: 'hoidanit' }
            )}
            title="go user id=2"
          />
        </View>

      </View>
    );
  }

  function DetailsScreen() {
    const route: any = useRoute()
    const navigation: any = useNavigation()
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id ={route?.params?.userId}</Text>
        <Button
          onPress={() => navigation.goBack()}
          title="go back home"
        />
      </View>
    );
  }


  return (

    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chu' }}
        />
        <Stack.Screen
          name="hoidanit"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            headerTitle: `xem chi tiet ${route?.params?.userId ?? ''}`,

          })}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName='hoidanit'>
        <Drawer.Screen name="Article" component={DetailsScreen} />
        <Drawer.Screen
          name="hoidanit"
          component={HomeScreen}
          options={{
            drawerLabel: 'trang chu',
            headerTitle: 'trang chu'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}


