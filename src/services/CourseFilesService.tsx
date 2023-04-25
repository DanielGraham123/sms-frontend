import axios from "axios";
import { config } from "../constants";
import { CourseFile } from "../types/entities";

const FILES_API_URL = config.API_URL + '/api/files';

class CourseFilesService {

    static async getFiles() {
        return axios.get(`${FILES_API_URL}`);
    }

    static async getFile(id: number) {
        return axios.get(`${FILES_API_URL}/${id}`);
    }

    static async addFile(data: CourseFile) {
        return axios.post(`${FILES_API_URL}/add`, data);
    }

    static async checkFileExists(name: string) {
        return axios.get(`${FILES_API_URL}/exists?name=${name}`);
    }

}

export default CourseFilesService;