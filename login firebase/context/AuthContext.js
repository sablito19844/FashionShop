import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import auth from "../firebase"
import { useEffect } from "react";
import { useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])
  return <AuthContext.Provider value={{ currentUser, signup }}>
    {!loading && children}
  </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}