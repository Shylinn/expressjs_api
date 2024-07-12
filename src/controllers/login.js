import { response } from 'express';
import * as services from '../services';
import bcryptjs, { genSaltSync, hashSync } from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { internalError } from '../middlewares/error_handling';


export const login = async (req, res) => {


    try {

        const { email, password } = req.body;
        console.log({ email, password })

        if (!email || !password) {
            return res.status(400).json({
                error: -1,
                message: "Missing payload"

            })
        }
        const response = await services.login(email, password);

        if (!response) {
            return res.status(200).json({
                error: 0,
                message: "Không có user với email này",
                token: null
            })
        }
        if (bcryptjs.compareSync(password, response.password)) {
            const token = jwt.sign({ user: response.id, email: response.email, roleCode: response.role_code }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            return res.status(200).json(

                {

                    error: 0,
                    message: "Đúng mật khẩu",
                    token: `Bearer ${token}`
                }


            )
        } else {
            return res.status(200).json(

                {

                    error: 0,
                    message: "Sai mật khẩu",
                    token: null

                }


            )

        }

    } catch (error) {
        return internalError(req, res);
    }
}
