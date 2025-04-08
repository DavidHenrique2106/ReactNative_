// src/config/parseConfig.ts
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'PV7zqDnhac9oMzEjnTLcNuqnmofXcacoklGRxDWj',
  '99rmxDZfRbAvVtHXrbJb17X3Cbvp05MO8Uqz2qhg'
);
Parse.serverURL = 'https://parseapi.back4app.com/';
