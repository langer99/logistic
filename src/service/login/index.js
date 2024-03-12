import api from '../Api/api';
import { Apis } from '../Api/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};
const UserLoginAPI = async (data) => {
    try {
        let result = await api.post(Apis.UserLoginAPI, data, {
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                withCredentials: false,
                changeOrigin: true,
            },
        });
        if (result.data.error) {
            return null;
        }
        return result.data;
    } catch (error) {
        showToast("authentifaition faild")
        return null;
    }
};


const Authenticate = async (data) => {
    try {
        await AsyncStorage.setItem('@Token_jwt', data.token)
        // await  AsyncStorage.setItem('@user_Info', JSON.stringify(data))
        await AsyncStorage.setItem('@refresh_token', data.token)
        return true
    } catch (error) {
        return (error)
    }
};
const Logout = async (data) => {
    console.log("Authenticate",data.token)
    try {
        await AsyncStorage.removeItem('@Token_jwt')
        await AsyncStorage.removeItem('@refresh_token')
        return true
    } catch (error) {
        return (error)
    }
};
const LoginService = {
    UserLoginAPI,
    Authenticate,
    Logout
};
export default LoginService
