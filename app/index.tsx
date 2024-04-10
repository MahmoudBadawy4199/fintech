import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
const Page = () => {
  const [assets] = useAssets([require('../assets/videos/intro.mp4')]);
  return (
    <View style={styles.container}>
      {/* Background Video */}
      {/* {assets && (
        <Video
          source={{ uri: assets[0].uri }}
          style={styles.video}
          shouldPlay
          isMuted
          isLooping
          resizeMode={ResizeMode.COVER}
          useNativeControls={false}
        />
      )} */}
      {/* Title Container */}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
        {/* Log in Button */}
        <Link
          href={'/login'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        {/* Sign up Button */}
        <Link
          href={'/signup'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  video: { width: '100%', height: '100%', position: 'absolute' },
  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
