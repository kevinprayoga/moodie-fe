import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native';

const HospitalItem = ({ name, address, detailText }) => {
  return (
    <View className="flex-row border-b border-gray-300 p-4">
      <Image
        source={{ uri: 'https://i.imgur.com/6RJYNMY.png' }} // Replace with appropriate image source
        style={{ width: 80, height: 80, marginRight: 10 }}
      />
      <View className="flex-col">
        <Text className="font-bold text-lg mb-2">{name}</Text>
        <Text className="text-gray-500 text-base mb-1">{address}</Text>
        <Button
          title="Detail"
          color="#FC5113"
          className="rounded-2xl"
        />
      </View>
      <View className="rounded-2xl bg-blue-300 h-1/5 px-2">
        <Text>
          1.7 km
        </Text>
      </View>
    </View>
  );
};

const HospitalList = () => {
  const hospitals = [
    {
      id: 1,
      name: 'Rumah Sakit Santo Borromeus',
      address: 'Bandung',
    },
    {
      id: 2,
      name: 'Rumah Sakit Ibu dan Anak',
      address: 'Dago Bandung',
    },
    {
      id: 3,
      name: 'Rumah Sakit Kakak dan Adik',
      address: 'Coblong',
    },
    {
      id:4,
      name: 'Rumah Sakit Kakek dan Nenek',
      address: 'Gempol',
    },
  ];

  return (
    <View className="flex-1">
      {hospitals.map((hospital) => (
        <HospitalItem
          key={hospital.id}
          name={hospital.name}
          address={hospital.address}
        // detailText={hospitalText}
        />
      ))}
    </View>
  );
};

const Hospital = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text className="text-xl font-bold p-4">Search for hospital</Text>
        <View className="bg-gray-200 p-4">
          <Text className="text-lg">✔ Bandung</Text>
        </View>
        <HospitalList />
      </View>
    </SafeAreaView>
  );
};

export default Hospital;