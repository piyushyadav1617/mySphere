import { createContext, PropsWithChildren, useContext, useState } from 'react';

type User = {
    email?:string,
    fullname?:string
    username?:string
    id:number
}

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  // isSignedIn: boolean;
};

export  function AuthProvider({
  children,
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const isSignedIn = true;
  const [user] = useState<User | null>(isSignedIn ? { id: 1, fullname:"Piyush Yadav", username:"yppiyushyadav" } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};