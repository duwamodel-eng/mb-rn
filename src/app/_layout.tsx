import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
  return (
    // <View style={{ padding: 50 }}>
    //   <Text>header</Text>
    //   <Slot />
    //   <Text>footer</Text>
    // </View>
    <Stack
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
      <Stack.Screen name='(tabs)'
        options={{ headerTitle: 'Trang Chu' }}
      />
      <Stack.Screen name='product/index'
        options={{ headerTitle: 'San Pham' }}
      />
      <Stack.Screen name='(auth)/login'
        options={{ headerTitle: 'Dang Nhap' }}
      />
    </Stack>
  )
}
export default RootLayout 