import { where } from 'sequelize';
import db from '../models'
import bcryptjs, { genSaltSync, hashSync } from 'bcryptjs';
const hashPassword = (password) => {
    return bcryptjs.hashSync(password, genSaltSync(10))
}

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    email: email
                },
                raw: true
            })
            if (user) {
                // Bạn có thể thực hiện thêm kiểm tra mật khẩu ở đây nếu cần
                resolve(user);
            } else {
                resolve(null); // Không tìm thấy người dùng
            }
        } catch (error) {
            reject(error);
        }
    });



}