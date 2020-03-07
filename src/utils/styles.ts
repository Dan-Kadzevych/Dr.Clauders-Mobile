import { Dimensions } from 'react-native';

const DEVICE_SCALE = Dimensions.get('window').width / 375;

export const normalize = (size: number): number =>
  Math.round(DEVICE_SCALE * size);
