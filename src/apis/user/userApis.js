import { all } from "axios";
import { axiosClient } from "../axiosClients";

const userApis = {
    getUser: () => {
        try {
            const res = axiosClient.get("/user");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
     postUser: (req) => {
        try {
            const res = axiosClient.post("/user", req);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteUser: (id) => {
        try {
            const res = axiosClient.delete(`/user/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteAllUser: () => {
        try {
            const res = axiosClient.delete("/user");
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     
}
export default userApis;
