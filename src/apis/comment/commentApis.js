import { axiosClient } from "../axiosClients";

const commentApis = {
    getComment: () => {
        try {
            const res = axiosClient.get("/comment");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
    deleteComment : (id) => {
        try {
            const res = axiosClient.delete(`/comment/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
    }
     
}
export default commentApis;