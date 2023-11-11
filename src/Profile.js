// previous uploading code

// import React, { useState } from 'react';
// import { View, Text, Button, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import RNFS from 'react-native-fs';
// import { useNavigation } from '@react-navigation/native';

// export default function Upload() {
//   const [imageData, setImageData] = useState([]);
//   const [fullImgRefPaths, setFullImgRefPaths] = useState([]);
//   const [photoNames, setPhotoNames] = useState([]);
//   const [photoDetails, setPhotoDetails] = useState([]);
//   const navigation = useNavigation();

//   const pickImage = async () => {
//     try {
//       const response = await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.images],
//       });

//       const imageName = `my_image_${imageData.length + 1}.jpg`;
//       const destPath = `${RNFS.DocumentDirectoryPath}/${imageName}`;

//       await RNFS.copyFile(response.uri, destPath);

//       setImageData([...imageData, response]);
//       setFullImgRefPaths([...fullImgRefPaths, destPath]);
//       setPhotoNames([...photoNames, '']);
//       setPhotoDetails([...photoDetails, '']);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteImage = async (index) => {
//     try {
//       if (fullImgRefPaths[index]) {
//         await RNFS.unlink(fullImgRefPaths[index]); // Delete the image file
//         const updatedImageData = [...imageData];
//         updatedImageData.splice(index, 1);
//         setImageData(updatedImageData);
//         const updatedPaths = [...fullImgRefPaths];
//         updatedPaths.splice(index, 1);
//         setFullImgRefPaths(updatedPaths);
//         const updatedPhotoNames = [...photoNames];
//         updatedPhotoNames.splice(index, 1);
//         setPhotoNames(updatedPhotoNames);
//         const updatedPhotoDetails = [...photoDetails];
//         updatedPhotoDetails.splice(index, 1);
//         setPhotoDetails(updatedPhotoDetails);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const uploadImage = async (index) => {
//     if (fullImgRefPaths[index]) {
//       // Pass the image URI, name, and details to the ImageScreen using navigation state
//       navigation.navigate('ImageScreen', {
//         imageUri: fullImgRefPaths[index],
//         name: photoNames[index],
//         details: photoDetails[index],
//       });
//     }
//   };

//   const saveImage = async (index) => {
//     if (fullImgRefPaths[index]) {
//       const imageUri = fullImgRefPaths[index];
//       const imageName = photoNames[index] || `image_${index + 1}.jpg`;
//       const destPath = `${RNFS.DocumentDirectoryPath}/${imageName}`;

//       try {
//         await RNFS.copyFile(imageUri, destPath);
//         alert(`Image "${imageName}" saved successfully!`);
//         // After saving, navigate to the ImageScreen with the saved image
//         // navigation.navigate('ImageScreen', { imageUri: destPath });
//       } catch (err) {
//         console.log(err);
//         alert(`Error saving the image "${imageName}"`);
//       }
//     }
//   };


//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={{ alignItems: 'center', marginLeft: 0 }}>
//         {imageData.map((image, index) => (
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={index}>
//             <TouchableOpacity onPress={() => uploadImage(index)}>
//               <Image
//                 source={{ uri: image.uri }}
//                 style={{ height: 200, width: 200, marginBottom: 20 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => uploadImage(index)}>
//               <Text>Image {index + 1}</Text>
//             </TouchableOpacity>
//             <TextInput
//               placeholder="Name"
//               value={photoNames[index]}
//               onChangeText={(text) => {
//                 const updatedNames = [...photoNames];
//                 updatedNames[index] = text;
//                 setPhotoNames(updatedNames);
//               }}
//             />
//             <TextInput
//               placeholder="Details"
//               value={photoDetails[index]}
//               onChangeText={(text) => {
//                 const updatedDetails = [...photoDetails];
//                 updatedDetails[index] = text;
//                 setPhotoDetails(updatedDetails);
//               }}
//             />
//             <View
//               style={{
//                 width: '100%',
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//                 marginBottom: 10,
//               }}
//             >
//               <Button title="Delete Image" onPress={() => deleteImage(index)} />
//               <Button title="Upload" onPress={() => uploadImage(index)} />
//               <Button title="Save" onPress={() => saveImage(index)} />
//             </View>
//           </View>
//         ))}
//         {imageData.length === 0 && <Text>No Images Found</Text>}
//         <Button title="Select Image" onPress={pickImage} />
//       </View>
//     </ScrollView>
//   );
// }





import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, TextInput, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Corrected import
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function Profile() {
  const navigation = useNavigation(); // Initialize navigation
  const [imageData, setImageData] = useState([]);
  const [photoNames, setPhotoNames] = useState([]);
  const [photoDetails, setPhotoDetails] = useState([]);
  // navigation.navigate('DetailScreen', { name, imageUrl, address, phoneNumber });

  useEffect(() => {
    // Load the data from AsyncStorage when the component mounts
    loadFromStorage();
  }, []);

  const saveToStorage = async () => {
    try {
      // Save the data to AsyncStorage
      console.log('Saving data to AsyncStorage...');
      await AsyncStorage.setItem('imageData', JSON.stringify(imageData));
      await AsyncStorage.setItem('photoNames', JSON.stringify(photoNames));
      await AsyncStorage.setItem('photoDetails', JSON.stringify(photoDetails));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const loadFromStorage = async () => {
    try {
      // Load the data from AsyncStorage
      console.log('Loading data from AsyncStorage...');
      const loadedImageData = JSON.parse(await AsyncStorage.getItem('imageData'));
      const loadedPhotoNames = JSON.parse(await AsyncStorage.getItem('photoNames'));
      const loadedPhotoDetails = JSON.parse(await AsyncStorage.getItem('photoDetails'));

      if (loadedImageData && loadedPhotoNames && loadedPhotoDetails) {
        setImageData(loadedImageData);
        setPhotoNames(loadedPhotoNames);
        setPhotoDetails(loadedPhotoDetails);
      }
      console.log('Data loaded successfully.'); 
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const pickImage = async (index) => {
    try {
      console.log('Picking image...');
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });

      console.log('Response:', response);

      const updatedImageData = [...imageData];
      updatedImageData[index] = response;
      setImageData(updatedImageData);

      // Save the updated data to AsyncStorage
      saveToStorage();
    } catch (err) {
      console.log('Error picking image:',err);
    }
  };

  const handleNameChange = (index, text) => {
    const updatedNames = [...photoNames];
    updatedNames[index] = text;
    setPhotoNames(updatedNames);

    // Save the updated data to AsyncStorage
    saveToStorage();
  };

  const handleDetailsChange = (index, text) => {
    const updatedDetails = [...photoDetails];
    updatedDetails[index] = text;
    setPhotoDetails(updatedDetails);

    // Save the updated data to AsyncStorage
    saveToStorage();
  };

  const addNewSector = () => {
    // Add a new sector by extending the state arrays with default values
    setImageData([...imageData, null]);
    setPhotoNames([...photoNames, '']);
    setPhotoDetails([...photoDetails, '']);

    // Save the updated data to AsyncStorage
    saveToStorage();
  };

  const deleteSector = (index) => {
    // Ask for confirmation before deleting
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this sector?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Create new arrays excluding the sector to be deleted
            const updatedImageData = [...imageData];
            updatedImageData.splice(index, 1);
            setImageData(updatedImageData);

            const updatedNames = [...photoNames];
            updatedNames.splice(index, 1);
            setPhotoNames(updatedNames);

            const updatedDetails = [...photoDetails];
            updatedDetails.splice(index, 1);
            setPhotoDetails(updatedDetails);

            // Save the updated data to AsyncStorage
            saveToStorage();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {imageData.map((image, index) => (
          <View key={index} style={{ width: '50%', padding: 10 }}>
            <TouchableOpacity
              onPress={() => {
                // Navigate to ImageScreen and pass the necessary data as params
                navigation.navigate('ImageScreen', {
                  name: photoNames[index],
                  details: photoDetails[index],
                  imageUrl: image?.uri, // Check if 'image' is not null or undefined before accessing 'uri'
                  address: 'whitefiled banglore 560066',
                  phoneNumber: '8884882321',
                });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>
                Person {index + 1}
              </Text>
            </TouchableOpacity>
            {image ? (
              <Image
                source={{ uri: image.uri }}
                style={{ width: '100%', height: 200, resizeMode: 'cover' }}
              />
            ) : (
              <TouchableOpacity onPress={() => pickImage(index)}>
                <View
                  style={{
                    width: '100%',
                    height: 200,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text>Add Photo</Text>
                </View>
              </TouchableOpacity>
            )}
            <TextInput
              placeholder="Name"
              value={photoNames[index]}
              onChangeText={(text) => handleNameChange(index, text)}
              style={{ textAlign: 'center' }}
              multiline={true}
            />
            <TextInput
              placeholder="Details"
              value={photoDetails[index]}
              onChangeText={(text) => handleDetailsChange(index, text)}
              style={{
                textAlign: 'center',
                height: 80,
              }}
              multiline={true}
            />
            <Button title="Delete" onPress={() => deleteSector(index)} />
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'blue' }} />
          </View>
        ))}
        <Button title="Add Images..." onPress={addNewSector} />
      </View>
    </ScrollView>
  );
}

