import iconStateSlice, { IconStateInterface } from "./slices/iconStateSlice";
import keyboardKeysStateSlice, { KeyKeysStateInterface } from "./slices/keyboardKeysStateSlice";
import testSlice, { TestInterface }  from "./slices/testSlice";


export interface CombinedStateInterface {
  testSlice: TestInterface;
  iconStateSlice: IconStateInterface;
  keyboardKeysStateSlice: KeyKeysStateInterface;
}

export const reducers = {
  testSlice: testSlice,
  iconStateSlice: iconStateSlice,
  keyboardKeysStateSlice: keyboardKeysStateSlice
};