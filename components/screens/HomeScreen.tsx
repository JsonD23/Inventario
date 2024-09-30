import { View, Text, Pressable } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{
      backgroundColor: "lightblue",
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>INVENTARIO 1.0 , BIENVENID@</Text>
      <Pressable
          style={{ 
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={ () => navigation.navigate('Menu') }
        >
        <Text>Ir a menú</Text>
      </Pressable>
    </View>
  )
}