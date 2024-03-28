import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { firebaseApp } from "../firebaseConfig/firebase";
const auth = getAuth(firebaseApp);
export class FirebaseAuthService {
  async createUser({ name, email, password }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userAccount) {
        // call another method if user ===true? then logieedin the user
        // or
        // return userAccount;
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Create user error", error);
      throw error; // Re-throw the error to be caught by the caller if needed
    }
  }
  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Login Error", error);
    }
  }
  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error in logout ", error);
    }
  }
  async getCurrentUser() {
    const user = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          // Unsubscribe to avoid memory leaks
          unsubscribe();

          if (user) {
            resolve(user);
          } else {
            console.log("No user");
            resolve(null); // Resolve with null if there's no user
          }
        },
        (error) => {
          console.error("Error fetching user", error);
          resolve(null); // Resolve with null in case of an error
        }
      );
    });

    return user;
  }
}
const authService = new FirebaseAuthService();
export default authService;
