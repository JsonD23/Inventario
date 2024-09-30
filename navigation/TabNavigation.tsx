import   DeleteUbi from '../components/screens/DeleteUbi';
import ModifyLocation, { MenuScreen } from '../components/screens/ModifyUbi';
import { HomeScreen } from '../components/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AgregarMobiliario from '@/components/screens/AddMobiliario';
import AddUbi from '@/components/screens/AddUbi';
import ArticulosScreen from '@/components/screens/ArticulosScreen';
import UbicacionesScreen from '@/components/screens/UbicacionesScreen';
import InventarioScreen from '@/components/screens/InventarioScreen';
import Permisos from '@/components/screens/Permisos';
import EscanearView from '@/components/screens/Escanear';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DeleteMobi from '@/components/screens/DeleteMobi';
import ModifyMobi from '@/components/screens/ModifyMobi';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen 
        name="ModifyUbi" 
        component={ModifyLocation}
        options={{
          title: 'ModUbi',
          tabBarIcon: () => (
            <Ionicons name="reload-circle" size={24} color="orange" />
          ),
        }}
      />
      <Tab.Screen 
        name="DeleteUbi" 
        component={DeleteUbi} 
        options={{
          title: 'BorrarUbi',
          tabBarIcon: () => (
            <MaterialIcons name="delete-forever" size={24} color="orange" />
          ),
        }}
      />
      <Tab.Screen 
        name="AgregarMobiliario" 
        component={AgregarMobiliario} 
        options={{
          title: 'AgregarM',
          tabBarIcon: () => (
            <MaterialIcons name="add-box" size={24} color="orange" />
          ),
        }}
      />
        <Tab.Screen 
        name="AgregarUbi" 
        component={AddUbi} 
        options={{
          title: 'AgregarU',
          tabBarIcon: () => (
            <MaterialIcons name="add-circle" size={24} color="orange" />
          ),
        }}
      />

<Tab.Screen 
        name="Ubis" 
        component={UbicacionesScreen} 
        options={{
          title: 'ListUbis',
          tabBarIcon: () => (
            <FontAwesome6 name="map-location-dot" size={24} color="orange" />
          ),
        }}
      />
      <Tab.Screen 
        name="Mobis" 
        component={ArticulosScreen} 
        options={{
          title: 'Reportes',
          tabBarIcon: () => (
            <FontAwesome6 name="boxes-packing" size={24} color="orange" />
          ),
        }}
      />
        <Tab.Screen 
        name="Inventario" 
        component={InventarioScreen} 
        options={{
          title: 'Inventario',
          tabBarIcon: () => (
            <FontAwesome5 name="boxes" size={24} color="orange" />
          ),
        }}
      />
          <Tab.Screen 
        name="Permisos" 
        component={Permisos} 
        options={{
          title: 'Permisos',
          tabBarIcon: () => (
            <FontAwesome5 name="user-check" size={24} color="orange" />
          ),
        }}
      />
           <Tab.Screen 
        name="Escanear" 
        component={EscanearView} 
        options={{
          title: 'Escanear',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="orange" />
          ),
        }}
      />
          <Tab.Screen 
        name="DeleteMobi" 
        component={DeleteMobi} 
        options={{
          title: 'BorrarMobi',
          tabBarIcon: () => (
            <MaterialIcons name="delete-sweep" size={24} color="orange" />
          ),
        }}
      />

<Tab.Screen 
        name="ModifyMobi" 
        component={ModifyMobi} 
        options={{
          title: 'ModificarMobi',
          tabBarIcon: () => (
            <Ionicons name="reload-circle" size={24} color="orange" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
