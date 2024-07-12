// import { response } from 'express'
import db from '../models'
import bcryptjs, { genSaltSync, hashSync } from 'bcryptjs';

const hashPassword = (password) => {
    return bcryptjs.hashSync(password, genSaltSync(10))
}

// ở đây cần kết nối với db và viết hàm để thêm user vào db
export const register = ({ email, password }) => new Promise(async (resolve, reject) => {

    try {
        const hash = hashPassword(password);
        const response = await db.User.findOrCreate({
            where: {
                email: email
            },
            defaults: {
                email: email,
                password: hash
            }
        }
            // const token =
        )
        resolve({
            eror: response[1] ? 0 : 1,
            message: response[1] ? "User is register successfully" : "Email is existing",
        })


    } catch (error) {
        reject(error)
    }


})
