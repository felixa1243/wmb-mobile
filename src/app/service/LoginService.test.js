import {LoginService} from "./LoginService";

describe('Login service test', () => {
    const user = {email: "admin@example.com", password: "12345678"}
    it('Should return username when login', async () => {
        await expect(LoginService(user)).resolves.toBeTruthy()
    })
    it('Should throw exception when error', async () => {
        await expect(LoginService({...user,password:'failing'})).rejects.toThrowErrorMatchingSnapshot()
    })
})