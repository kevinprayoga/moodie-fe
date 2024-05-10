import { View, Text, FlatList, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState } from 'react';

const Post = ({ name, text }) => {
  return (
    <View className="border-b border-gray-300 p-4 mb-4">
      <Text className="font-bold text-lg">{name}</Text>
      <Text className="text-base">{text}</Text>
    </View>
  );
};

const Feed = () => {
  const posts = [
    { name: 'A-Combwem', text: 'Hi all! Do you live in the Bronx? Do you like reading? Enjoying a cozy evening with a good book and a cup of tea today' },
    { name: 'B-Combwem', text: 'Just hiked to the top of a mountain!' },
  ];

  return (
    <View className="flex-1 w-full">
      {posts.map((post) => (
        <Post key={post.name} name={post.name} text={post.text} />
      ))}
    </View>
  );
};

const PostHeader = ({ onPostSubmit, placeholderText = 'What\'s on your mind?' }) => {
  const [postText, setPostText] = useState('');
  const characterLimit = 250; // Adjust as needed

  const handlePost = () => {
    const trimmedText = postText.trim();
    if (trimmedText) {
      onPostSubmit(trimmedText);
      setPostText(''); // Clear input after successful post
    }
  };

  return (
    <View className="flex-row justify-between bg-gray-200 p-4">
      <TextInput
        className="flex-1 rounded-md px-4 py-2 bg-white"
        placeholder={placeholderText}
        onChangeText={setPostText}
        value={postText}
        maxLength={characterLimit} // Set character limit
      />
      <View className="flex-row items-center">
        <Button title="Post" onPress={handlePost} disabled={!postText.trim()} />
      </View>
    </View>
  );
};

const Forum = () => {
  const handlePostSubmit = (text) => {
    // Implement your logic to handle submitted post (e.g., send to backend)
    console.log('Submitted post:', text);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <View className="border-2 w-full h-16 px-4 bg-primary rounded-2xl items-center flex-row space-x-4">
          <PostHeader onPostSubmit={handlePostSubmit} placeholderText="Share your thoughts..." />
        </View>
        <Feed />
      </View>
    </SafeAreaView>
  );
};

// const Forum = () => {
//   return (
//     <SafeAreaView className="bg-primary">
//       <FlatList 
//         data = {[{id:1}, {id:2}, {id:3}]}
//         keyExtractor={(item) => item.$id}
//         renderItem={( {item} )=>(
//           <Text className="text-3xl text-black">{ item.id }</Text>
//         )}
//         ListHeaderComponent={()=>(
//           <View className="my-6 px-4 space-y-6">
//             <View className="justify-between items-start flex-row mb-6">
//               <View>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   )
// }

export default Forum