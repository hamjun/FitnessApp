import { MMKV } from 'react-native-mmkv';

const Storage = {
  set: (key, value) => MMKV.set(key, value),
  getString: (key) => MMKV.getString(key),
  getNumber: (key) => MMKV.getNumber(key),
  getBoolean: (key) => MMKV.getBoolean(key),
  delete: (key) => MMKV.delete(key),
  clear: () => MMKV.getAllKeys().forEach((key) => MMKV.delete(key)),
};

export const Keys = {
  activity: "activity",
  age: "age",
  gender: "gender",
  gym: "gym",
  setup: "setup",
};

export default Storage;
