import React, {useState} from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import SignIn from "./sign-in";
import img from './assets/bg3.jpg'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([img]);

    await Promise.all([...imageAssets]);
  };

  return (
      !isReady
          ? <AppLoading
              startAsync={_loadAssetsAsync}
              onFinish={() => setIsReady(true)}
              onError={console.warn}
          />
          : <SignIn />
  );
}