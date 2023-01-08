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
     }
}
export default userApis;
