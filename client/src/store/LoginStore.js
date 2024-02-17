import { create } from "zustand";

const UserStore = create((set) => ({
    userDetails: JSON.parse(localStorage.getItem('userDetails')) || null,
    loginData: (user) => {
        set({ userDetails: user });
        localStorage.setItem('userDetails', JSON.stringify(user));
    },
    loginState: false,
    setLoginState: (state) => set({ loginState: state }),
    logout: () => {
        set({ userDetails: null, loginState: false});
        localStorage.removeItem('userDetails');
    },
}));

export default UserStore;