export interface AuthContextValue {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

export interface ISessionProps {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}
