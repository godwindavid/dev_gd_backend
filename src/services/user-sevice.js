import { BaseService } from "./index.js";

export class UserService extends BaseService {
    async healthCheck() {
        try {
            return true
        } catch (error) {
            throw (error)
        }
    }
}