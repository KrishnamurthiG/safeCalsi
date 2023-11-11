

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// export default function ImageScreen({ route }) {
//   const { name, details, imageUrl, address, phoneNumber } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.nameText}>Name: {name}</Text>
//       <View style={{ marginTop: 10, marginBottom: 10 }}>
//         <Image source={{ uri: imageUrl }} style={styles.image} />
//       </View>
//       <Text style={styles.boldText}>Details: {details}</Text>
//       <Text style={styles.boldText}>Address: {address}</Text>
//       <Text style={styles.boldText}>Phone Number: {phoneNumber}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
//   nameText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   boldText: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: 'bold', // Add fontWeight: 'bold' to make text elements bold
//   },
//   image: {
//     width: 300,
//     height: 340,
//     resizeMode: 'cover',
//     borderRadius: 30,
//   },
// });





import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import Calsi1 from './Calsi1';
import { useNavigation } from '@react-navigation/native';

export default function ImageScreen({ route }) {
  const { name, details, imageUrl, address, phoneNumber } = route.params;
  const navigation = useNavigation(); // Import 'useNavigation' from '@react-navigation/native'

  const handleConfirmPress = () => {
    navigation.navigate('Main'); // Navigate to the 'Profile' screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Name: {name}</Text>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.boldText}>Details: {details}</Text>
      <Text style={styles.boldText}>Address: {address}</Text>
      <Text style={styles.boldText}>Phone Number: {phoneNumber}</Text>
      <View style={{ marginTop: 50 }}>
      <Button title="Back" onPress={handleConfirmPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  boldText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 340,
    resizeMode: 'cover',
    borderRadius: 30,
  },
});
