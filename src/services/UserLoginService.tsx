import axios from "axios";
// import dotenv from "dotenv";

// var env = dotenv.config();

// console.log("config: ", env);

const USER_LOGIN_URL = 'https://sms-backend-production-717a.up.railway.app/api/auth/login';
const STAFF_LOGIN_URL = `https://sms-backend-production-717a.up.railway.app/api/auth/staff-login`;


class UserLoginService {

    static async login(usernameOrEmail: string, password: string) {
        const response = await axios.post(USER_LOGIN_URL, {
            usernameOrEmail: usernameOrEmail,
            password: password
        });
        return response.data;
    }


    static async staffLogin(staff: { usernameOrEmail: string; password: string; role: string; }) {
        const response = await axios.post(STAFF_LOGIN_URL, {
            usernameOrEmail: staff.usernameOrEmail,
            password: staff.password,
            role: staff.role,
        });
        return response.data;
    }
}

export default UserLoginService;