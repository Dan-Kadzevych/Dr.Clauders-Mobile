/* eslint-disable */
jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(
    (item, value) =>
      new Promise((resolve, reject) => {
        resolve(null);
      }),
  ),
  mergeItem: jest.fn(
    (item, value) =>
      new Promise((resolve, reject) => {
        resolve(null);
      }),
  ),
}));
