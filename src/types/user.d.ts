export interface AuthContextValue {
  signIn: () => void;
  signOut: () => void;
  user: User | null;
  loading: boolean;
}