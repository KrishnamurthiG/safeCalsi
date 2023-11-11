
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Contacts = () => {
//   const [countryCode, setCountryCode] = useState('+91'); // Default country code
//   const [contact, setContact] = useState('');
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     // Load contacts from AsyncStorage when the component mounts
//     loadContacts();
//   }, []);

//   const saveContact = async () => {
//     try {
//       // Check if the entered values are valid
//       if (!isNaN(contact) && contact.trim() !== '') {
//         // Add the country code to the contact number
//         const formattedContact = `${countryCode}${contact}`;

//         // Save the new contact to AsyncStorage
//         await AsyncStorage.setItem('contacts', JSON.stringify([...contacts, formattedContact]));

//         // Update the state with the new contact
//         setContacts([...contacts, formattedContact]);

//         // Clear the input fields
//         setCountryCode('+91'); // Reset to the default country code
//         setContact('');
//       } else {
//         // Display an error message or handle invalid input
//         console.error('Invalid contact number');
//       }
//     } catch (error) {
//       console.error('Error saving contact:', error);
//     }
//   };

//   const deleteContact = async (index) => {
//     try {
//       // Remove the contact from AsyncStorage
//       const updatedContacts = [...contacts];
//       updatedContacts.splice(index, 1);
//       await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

//       // Update the state with the updated contacts
//       setContacts(updatedContacts);
//     } catch (error) {
//       console.error('Error deleting contact:', error);
//     }
//   };

//   const sendMessage = (phoneNumber) => {
//     const message = 'Hello, this is a test message!'; // Change this message as needed
//     const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
//     Linking.openURL(url);
//   };

//   const loadContacts = async () => {
//     try {
//       // Load contacts from AsyncStorage
//       const storedContacts = await AsyncStorage.getItem('contacts');
//       if (storedContacts) {
//         setContacts(JSON.parse(storedContacts));
//       }
//     } catch (error) {
//       console.error('Error loading contacts:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Manager</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.countryCodeInput}
//           placeholder="Country Code"
//           value={countryCode}
//           onChangeText={(text) => setCountryCode(text)}
//         />
//         <TextInput
//           style={styles.contactInput}
//           placeholder="Enter contact number"
//           value={contact}
//           onChangeText={(text) => setContact(text)}
//           keyboardType="numeric" // This restricts input to numeric values
//         />
//       </View>
//       <Button title="Add Contact" onPress={saveContact} />
//       <Text style={styles.subtitle}>Contacts:</Text>
//       <FlatList
//         data={contacts}
//         renderItem={({ item, index }) => (
//           <View style={styles.contactContainer}>
//             <Text style={styles.contactItem}>{item}</Text>
//             <TouchableOpacity onPress={() => sendMessage(item)}>
//               <Text style={styles.sendButton}>Send Message</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteContact(index)}>
//               <Text style={styles.deleteButton}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   countryCodeInput: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginRight: 8,
//     paddingLeft: 8,
//   },
//   contactInput: {
//     flex: 2,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 8,
//   },
//   contactContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   contactItem: {
//     flex: 1,
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   sendButton: {
//     color: 'blue',
//     fontSize: 16,
//     marginRight: 10,
//   },
//   deleteButton: {
//     color: 'red',
//     fontSize: 16,
//     marginLeft: 10,
//   },
// });

// export default Contacts;









// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const Contacts = () => {
//   const [countryCode, setCountryCode] = useState('+91');
//   const [contact, setContact] = useState('');
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     loadContacts();
//   }, []);

//   const saveContact = async () => {
//     try {
//       if (!isNaN(contact) && contact.trim() !== '') {
//         const formattedContact = `${countryCode}${contact}`;
//         await AsyncStorage.setItem('contacts', JSON.stringify([...contacts, formattedContact]));
//         setContacts([...contacts, formattedContact]);
//         setCountryCode('+91');
//         setContact('');
//       } else {
//         console.error('Invalid contact number');
//       }
//     } catch (error) {
//       console.error('Error saving contact:', error);
//     }
//   };

//   const deleteContact = async (index) => {
//     try {
//       const updatedContacts = [...contacts];
//       updatedContacts.splice(index, 1);
//       await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
//       setContacts(updatedContacts);
//     } catch (error) {
//       console.error('Error deleting contact:', error);
//     }
//   };

//   const sendSafetyMessage = async (phoneNumber) => {
//     const message = 'I am safe here';

//     // Iterate through each contact and send the message

//       try {
//     const response = await fetch('http://your-server-ip:3001/send-sms', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         to: 8884882321,
//         body: 'I am Safe here',
//       }),
//     });

//     const result = await response.json();

//     if (result.success) {
//       console.log('SMS sent successfully.');
//     } else {
//       console.error('Error sending SMS:', result.message);
//     }
//   } catch (error) {
//     console.error('Error sending SMS:', error.message);
//   }
// };

//   const loadContacts = async () => {
//     try {
//       const storedContacts = await AsyncStorage.getItem('contacts');
//       if (storedContacts) {
//         setContacts(JSON.parse(storedContacts));
//       }
//     } catch (error) {
//       console.error('Error loading contacts:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contact Manager</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.countryCodeInput}
//           placeholder="Country Code"
//           value={countryCode}
//           onChangeText={(text) => setCountryCode(text)}
//         />
//         <TextInput
//           style={styles.contactInput}
//           placeholder="Enter contact number"
//           value={contact}
//           onChangeText={(text) => setContact(text)}
//           keyboardType="numeric"
//         />
//       </View>
//       <Button title="Add Contact" onPress={saveContact} />
//       <Button title="Send Safety Message" onPress={sendSafetyMessage} />
//       <Text style={styles.subtitle}>Contacts:</Text>
//       <FlatList
//         data={contacts}
//         renderItem={({ item, index }) => (
//           <View style={styles.contactContainer}>
//             <Text style={styles.contactItem}>{item}</Text>
//             <TouchableOpacity onPress={() => deleteContact(index)}>
//               <Text style={styles.deleteButton}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   countryCodeInput: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginRight: 8,
//     paddingLeft: 8,
//   },
//   contactInput: {
//     flex: 2,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 8,
//   },
//   contactContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   contactItem: {
//     flex: 1,
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   deleteButton: {
//     color: 'red',
//     fontSize: 16,
//     marginLeft: 10,
//   },
// });

// export default Contacts;


import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import email from 'react-native-email-link';

const Contacts = () => {
  const [countryCode, setCountryCode] = useState('+91'); // Default country code
  const [contact, setContact] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Load contacts from AsyncStorage when the component mounts
    loadContacts();
  }, []);

  const saveContact = async () => {
    try {
      // Check if the entered values are valid
      if (!isNaN(contact) && contact.trim() !== '') {
        // Add the country code to the contact number
        const formattedContact = `${countryCode}${contact}`;

        // Save the new contact to AsyncStorage
        await AsyncStorage.setItem('contacts', JSON.stringify([...contacts, formattedContact]));

        // Update the state with the new contact
        setContacts([...contacts, formattedContact]);

        // Clear the input fields
        setCountryCode('+91'); // Reset to the default country code
        setContact('');
      } else {
        // Display an error message or handle invalid input
        console.error('Invalid contact number');
      }
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const deleteContact = async (index) => {
    try {
      // Remove the contact from AsyncStorage
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Update the state with the updated contacts
      setContacts(updatedContacts);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const sendEmail = (emailAddress) => {
    const subject = 'Test Subject'; // Change this subject as needed
    const body = 'Hello, this is a test email!'; // Change this body as needed

    email({
      to: [emailAddress],
      subject,
      body,
    }).catch(console.error);
  };

  const loadContacts = async () => {
    try {
      // Load contacts from AsyncStorage
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.countryCodeInput}
          placeholder="Country Code"
          value={countryCode}
          onChangeText={(text) => setCountryCode(text)}
        />
        <TextInput
          style={styles.contactInput}
          placeholder="Enter contact number"
          value={contact}
          onChangeText={(text) => setContact(text)}
          keyboardType="numeric" // This restricts input to numeric values
        />
      </View>
      <Button title="Add Contact" onPress={saveContact} />
      <Text style={styles.subtitle}>Contacts:</Text>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => (
          <View style={styles.contactContainer}>
            <Text style={styles.contactItem}>{item}</Text>
            <TouchableOpacity onPress={() => sendEmail(item)}>
              <Text style={styles.sendButton}>Send Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteContact(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  countryCodeInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingLeft: 8,
  },
  contactInput: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactItem: {
    flex: 1,
    fontSize: 16,
    marginBottom: 8,
  },
  sendButton: {
    color: 'blue',
    fontSize: 16,
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Contacts;

