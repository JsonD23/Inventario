import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
import DeleteUbi from '../components/screens/DeleteUbi';
import ModifyLocation from '@/components/screens/ModifyUbi';
import {HomeScreen} from '../components/screens/HomeScreen';
import UbicacionesScreen from '@/components/screens/UbicacionesScreen';
import ArticulosScreen from '@/components/screens/ArticulosScreen';
import InventarioScreen from '@/components/screens/InventarioScreen';
import Permisos from '@/components/screens/Permisos';
import EscanearView from '@/components/screens/Escanear';
import DeleteMobi from '@/components/screens/DeleteMobi';
import ModifyMobi from '@/components/screens/ModifyMobi';
export const StackNavigation =()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Home"
     component={HomeScreen}
     />

    <Stack.Screen name="Menu"
     component={MenuScreen}
     />

      <Stack.Screen name="Detail"
     component={DeleteUbi}
     />
    <Stack.Screen name="ListUbi"
     component={UbicacionesScreen}
     />
     <Stack.Screen name="ListMobis"
     component={ArticulosScreen}
     />
       <Stack.Screen name="Inventario"
     component={InventarioScreen}
     />
          <Stack.Screen name="Permisos"
     component={Permisos}
     />
            <Stack.Screen name="Escanear"
     component={EscanearView}
     />

<Stack.Screen name="DeleteMobi"
     component={DeleteMobi}
     />
     
<Stack.Screen name="ModifyUbi"
     component={ModifyLocation}
     />
<Stack.Screen name="ModifyMobi"
     component={ModifyMobi}
     />

    </Stack.Navigator>
    
    </NavigationContainer>
  )
}