import * as services from '../services';
export const getUser = async (req, res) => {
    try {
        const response = await services.getUser();
        console.log(response);
        return res.status(200).json({
            error: 0,
            data: response
        })
    } catch (error) {
        return res.status(500).json({
            error: 1,
            data: null
        })
    }


}