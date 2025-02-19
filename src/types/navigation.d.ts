// types/navigation.d.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Signin: undefined;
  Number: undefined;
  Verification: undefined;
  Location: undefined;
  Login: undefined;
  Signup: undefined;
};

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Signin'>;
export type NumberScreenProps = NativeStackScreenProps<RootStackParamList, 'Number'>;
export type VerficationScreenProps = NativeStackScreenProps<RootStackParamList, 'Verification'>;
export type LocationScreenProps = NativeStackScreenProps<RootStackParamList, 'Location'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;
