import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthUser = create((set) => ({
    authUser : null,
    isSigningUp : false,
    isLogging : false,
    isUpdatingProfile : false,
    ischeckingAuth : true,


    checkAuth: async ()=>{
        try {
            const response = axiosInstance.get("/auth/check");

            set({authUser : response.data});
        } catch (error) {
            console.log("Error in checkAuth: ", error.message);
            set({authUser : null});
        }
        finally {
            set({ischeckingAuth : false});
        }
    },

    signup: async (data)=> {

    }
}))