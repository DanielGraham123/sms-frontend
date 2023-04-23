import { config } from "../constants";
import axios from "axios";
import { AdmissionForm } from "../types/entities";

const ADMISSION_API_URL = config.API_URL + '/api/admission';

class AdmissionService {

    static async getAdmissions() {
        return axios.get(`${ADMISSION_API_URL}/all`);
    }

    static async getAdmission(id: number) {
        return axios.get(`${ADMISSION_API_URL}/${id}`);
    }

    static async createAdmission(data: AdmissionForm) {
        return axios.post(`${ADMISSION_API_URL}/admit`, data);
    }

}

export default AdmissionService;