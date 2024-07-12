import db from '../models'
export const getUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll();
            resolve(users);
        } catch (error) {
            reject(error)
        }


    })


}