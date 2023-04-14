import axios from "axios";

const PROGRAMME_API_URL = "https://sms-backend-production-717a.up.railway.app/api/programmes";

class ProgrammeService {

    static async getAllProgrammes() {
        const response = await axios.get(PROGRAMME_API_URL);
        return response.data;
    }

    static async getProgrammeById(id: number) {
        const response = await axios.get(`${PROGRAMME_API_URL}/${id}`);
        return response.data;
    }

    static async createProgramme(programme: object) {
        const response = await axios.post(`${PROGRAMME_API_URL}/add`, programme);
        return response.data;
    }

    static async updateProgramme(id: number, programme: object) {
        const response = await axios.put(`${PROGRAMME_API_URL}/update/${id}`, programme);
        return response.data;
    }

    static async deleteProgramme(id: number) {
        const response = await axios.delete(`${PROGRAMME_API_URL}/delete/${id}`);
        return response.data;
    }

}

export default ProgrammeService;