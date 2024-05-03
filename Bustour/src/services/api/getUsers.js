import http from "@/services/http.js";

export default {
    getUsers() {
        return http.get(`users`)
    }
}