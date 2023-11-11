// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import HomeScreen from './HomeScreen'; // Import your screen components
// import Contacts from './Contacts';
// import Upload from './Upload';
// import Describe from './Alert';
// import Profile from './Profile';
// import Alert from './Alert';

// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => (
//   <TouchableOpacity
//   style={{
//     justifyContent: 'center',
//     alignItems: 'center', 
//     ...style.shadow
//   }}
//   onPress={onPress}
//   >
//     <View style={{
//       top: -45,
//       width: 70,
//       height: 70,
//       borderRadius: 35,
//       backgroundColor: '#e32f45'
//     }}>
//       {children}
//     </View>
//   </TouchableOpacity>

// )

// export default Main = () =>{
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,  //it will not display the previous tab
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 25,
//           left: 20,
//           right: 20,
//           elevation: 0,
//           backgroundColor: '#ffffff',
//           borderRadius: 15,
//           height: 90,
//           ...style.shadow     // shadow declaration
//         },
//       }}
//     >
//       {/* <Tab.Screen name="Safe Calsi.." component={HomeScreen} 
//        options={{ 
//         tabBarIcon: ({focused})=> (
//         <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
//             <Image 
//                 source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/home.png")}
//                 resizeMode='contain'
//                 style={{
//                     width: 25, 
//                     height: 25, 
//                     tintColor: focused ? '#e32f45': '#748c94',
//                     }}
//                     />
//             <Text 
//             style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
//                 Home
//                 </Text>
//         </View>
//     ),
//     }}
//     /> */}
//     <Tab.Screen name="Profile" component={Profile} 
//       options={{ 
//         tabBarIcon: ({focused})=> (
//         <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
//             <Image 
//                 source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/profile.png")}
//                 resizeMode='contain'
//                 style={{
//                     width: 25, 
//                     height: 25, 
//                     tintColor: focused ? '#e32f45': '#748c94',
//                     }}
//                     />
//             <Text 
//             style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
//                 Profile
//                 </Text>
//         </View>
//     ),
//     }}/>
      
//       <Tab.Screen name="Upload" component={Upload} 
//       options={{ 
//         tabBarIcon: ({focused})=> (
          
//             <Image 
//                 source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/plus.png")}
//                 resizeMode='contain'
//                 style={{
//                     width: 30, 
//                     height: 30, 
//                     tintColor: '#fff',
//                     }}
//                     />
                    
                   
//         ),
        
//         tabBarButton: (props) => (
//           <CustomTabBarButton { ...props} />
//         )
        
//       }
//     }
    
//       />
     
      
      



//       {/* <Tab.Screen name="Alert" component={Alert} 
//       options={{ 
//         tabBarIcon: ({focused})=> (
//         <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
//             <Image 
//                 source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/alert.png")}
//                 resizeMode='contain'
//                 style={{
//                     width: 25, 
//                     height: 25, 
//                     tintColor: focused ? '#e32f45': '#748c94',
//                     }}
//                     />
//             <Text 
//             style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
//                 Alert
//                 </Text>
//         </View>
//     ),
//     }}/> */}
//       <Tab.Screen name="Contacts" component={Contacts} 
//       options={{ 
//         tabBarIcon: ({focused})=> (
//         <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
//             <Image 
//                 source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/phone.png")}
//                 resizeMode='contain'
//                 style={{
//                     width: 25, 
//                     height: 25, 
//                     tintColor: focused ? '#e32f45': '#748c94',
//                     }}
//                     />
//             <Text 
//             style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
//                 Contacts
//                 </Text>
//         </View>
//     ),
//     }} />
//     </Tab.Navigator>
//   );
// }

// const style = StyleSheet.create({
//     shadow: {                        //shadow style calling
//         shadowColor: 'blue',
//         shadowOffset: {
//             width:0,
//             height: 10,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.5,
//         elevation: 5
//     }
// });






import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'; // Import RectButton
import HomeScreen from './HomeScreen'; // Import your screen components
import Contacts from './Contacts';
import Upload from './Upload';
import Describe from './Alert';
import Profile from './Profile';
import Alert from './Alert';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    justifyContent: 'center',
    alignItems: 'center', 
    ...style.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      top: -45,
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#e32f45'
    }}>
      {children}
    </View>
  </TouchableOpacity>

)

export default Main = () =>{
  return (
   
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,  //it will not display the previous tab
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...style.shadow     // shadow declaration
        },
      }}
    >
      {/* <Tab.Screen name="Safe Calsi.." component={HomeScreen} 
       options={{ 
        tabBarIcon: ({focused})=> (
        <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
                source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/home.png")}
                resizeMode='contain'
                style={{
                    width: 25, 
                    height: 25, 
                    tintColor: focused ? '#e32f45': '#748c94',
                    }}
                    />
            <Text 
            style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
                Home
                </Text>
        </View>
    ),
    }}
    /> */}
    <Tab.Screen name="Profile" component={Profile} 
      options={{ 
        tabBarIcon: ({focused})=> (
        <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
                source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/profile.png")}
                resizeMode='contain'
                style={{
                    width: 25, 
                    height: 25, 
                    tintColor: focused ? '#e32f45': '#748c94',
                    }}
                    />
            <Text 
            style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
                Profile
                </Text>
        </View>
    ),
    }}/>
      
      <Tab.Screen name="Upload" component={Upload} 
      options={{ 
        tabBarIcon: ({focused})=> (
          
            <Image 
                source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/plus.png")}
                resizeMode='contain'
                style={{
                    width: 30, 
                    height: 30, 
                    tintColor: '#fff',
                    }}
                    />
                    
                   
        ),
        
        tabBarButton: (props) => (
          <CustomTabBarButton { ...props} />
        )
        
      }
    }
    
      />
     
      
      



      {/* <Tab.Screen name="Alert" component={Alert} 
      options={{ 
        tabBarIcon: ({focused})=> (
        <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
                source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/alert.png")}
                resizeMode='contain'
                style={{
                    width: 25, 
                    height: 25, 
                    tintColor: focused ? '#e32f45': '#748c94',
                    }}
                    />
            <Text 
            style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
                Alert
                </Text>
        </View>
    ),
    }}/> */}
      <Tab.Screen name="Contacts" component={Contacts} 
      options={{ 
        tabBarIcon: ({focused})=> (
        <View  style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
                source={require("C:/Users/Subhash G/Safe_Calsi/src/icon/phone.png")}
                resizeMode='contain'
                style={{
                    width: 25, 
                    height: 25, 
                    tintColor: focused ? '#e32f45': '#748c94',
                    }}
                    />
            <Text 
            style={{color: focused ? '#e32f45': '#748c94', fontSize: 12}}>
                Contacts
                </Text>
        </View>
    ),
    }} />
    </Tab.Navigator>
    
  );
}

const style = StyleSheet.create({
    shadow: {                        //shadow style calling
        shadowColor: 'blue',
        shadowOffset: {
            width:0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

