import axios from "axios";

const USER_REGISTER_URL = 'https://sms-backend-production-717a.up.railway.app/api/auth/register';


class UserRegisterService {
    static async registerUser(user: object) {
        const response = await axios.post(USER_REGISTER_URL, user);
        console.log("response: ", response);
        return response.data;
    }
}

export default UserRegisterService;