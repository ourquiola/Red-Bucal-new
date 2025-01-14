import withMiddleware from "../../middlewares/withMiddleware"

const handler = (req, res) => {
    if (req.method === 'GET') {
        if (req.user) {
            res.status(200).send({
                status: 'ok',
                data: {
                    isLoggedIn: true,
                    user: req.user
                }
            })
        } else {
            if (req.business) {

                res.status(200).send({
                    status: 'ok',
                    data: {
                        isLoggedIn: true,
                        user: req.business
                    }
                })

            } else {
                if (req.admin) {

                    res.status(200).send({
                        status: 'ok',
                        data: {
                            isLoggedIn: true,
                            user: req.admin
                        }
                    })

                } else {

                    if (req.master) {

                        res.status(200).send({
                            status: 'ok',
                            data: {
                                isLoggedIn: true,
                                user: req.master
                            }
                        })

                    } else {
                        res.status(200).send({
                            status: 'ok',
                            data: {
                                isLoggedIn: false,
                                user: {}
                            }
                        })
                    }
                }
            }
        }
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)