import {create} from 'zustand';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface UserState {
  me: FirebaseAuthTypes.User;
  getMe: () => void;
}

// @ts-ignore

// @ts-ignore
const useUserStore = create<UserState>()(set => ({
  me: {} as FirebaseAuthTypes.User,
  getMe: () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        set({me: user});
      }
    });
  },
}));

export default useUserStore;
