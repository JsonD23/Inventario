import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../components/screens/HomeScreen';
import  DeleteUbi from '../components/screens/DeleteUbi';
import { MenuScreen } from '../components/screens/ModifyUbi';
import AgregarMobiliario from '@/components/screens/AddMobiliario';
import AddUbi from '@/components/screens/AddUbi';
import UbicacionesList from '@/components/screens/UbicacionesScreen';
import ArticulosScreen from '@/components/screens/ArticulosScreen';
import InventarioScreen from '@/components/screens/InventarioScreen';
import Permisos from '@/components/screens/Permisos';
import EscanearView from '@/components/screens/Escanear';
import DeleteMobi from '@/components/screens/DeleteMobi';
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={ HomeScreen } />
        <Drawer.Screen name='Menu' component={ MenuScreen } />
        <Drawer.Screen name='Detail' component={ DeleteUbi } />
        <Drawer.Screen name='AgregarMobiliario' component={ AgregarMobiliario } />
        <Drawer.Screen name='AgregarUbi' component={ AddUbi } />
        <Drawer.Screen name='ListUbis' component={ UbicacionesList} />
        <Drawer.Screen name='ListMobis' component={ ArticulosScreen} />
        <Drawer.Screen name='Inventario' component={ InventarioScreen} />
        <Drawer.Screen name='Permisos' component={ Permisos} />
        <Drawer.Screen name='Escanear' component={ EscanearView} />
        <Drawer.Screen name='DeleteMobi' component={ DeleteMobi} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}