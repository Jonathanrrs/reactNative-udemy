import {useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>();
  const [userLocation, setUserLocation] = useState<Location>({
    longitud: 0,
    latitude: 0,
  });

  const watchID = useRef<number>();

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setUserLocation(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitud: coords.longitude,
          });
        },
        err => reject({err}),
        {
          enableHighAccuracy: true,
        },
      );
    });
  };

  const followUserLocation = () => {
    watchID.current = Geolocation.watchPosition(
      ({coords}) => {
        setUserLocation({
          latitude: coords.latitude,
          longitud: coords.longitude,
        });
      },
      err => console.log({err}),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  };

  const stopFollowUserLocation = () => {
    if (watchID.current) {
      Geolocation.clearWatch(watchID.current);
    }
  };

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  };
};
