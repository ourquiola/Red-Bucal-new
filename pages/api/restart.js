import withMiddleware from "../../middlewares/withMiddleware";
import bcrypt from "bcryptjs"

const handler = async (req, res) => {
	if (req.method === "POST") {
		/* const { userList } = req.body

		console.log("numero de usurarios total: ", userList.length)
		let count = 0

		try {
			
			for (let i = 0; i < userList.length; i++) {
				const exist = await req.db.collection('users').countDocuments({identification: userList[i].identification})
				if (!exist) {
					count++
					console.log(count)
					const salt = await bcrypt.genSalt(10)
					const hashedPassword = await bcrypt.hash(userList[i].identification, salt)

					await req.db.collection('users').insertOne({
						...userList[i],
						mustChangePass: true,
						password: hashedPassword
					})
				}
			}
			
			console.log('finalizo el for')
			
		} catch (error) {
			console.log(error)
		}
		
		console.log('numero de usuarios a reestaurar: ', count) */

		res.send({
			message: 'respuestad',
			count
		});
	} else {
		res.status(405).end();
	}
};

export default withMiddleware(handler);