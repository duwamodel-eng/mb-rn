import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App() {

  const Stack = createNativeStackNavigator();

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
        <Text>user id ={route.params.userId}</Text>
        <Button
          onPress={() => navigation.goBack()}
          title="go back home"
        />
      </View>
    );
  }


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="hoidanit" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


