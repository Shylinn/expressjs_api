import * as services from '../services';


export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!email || !password) {
            return res.status(400).json({
                error: -1,
                message: "Missing payload"

            })
        }
        const response = await services.register({ email, password });
        console.log(response)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            error: -1,
            message: "Internal Code"

        })
    }

}
