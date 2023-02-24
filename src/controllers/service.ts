import axios from "axios"
import { logger } from "../utils/logger"

export default class Service {

	static async createContract(email: string) {
		try {
			const apiToken = process.env.APITOKEN
			const url = 'https://4everland10015.api-us1.com/api/3/contacts'
			const res = await axios.post(
				url,
				{
     				"contact": {
          				"email": email,
          				"firstName": "-",
          				"lastName": "-",
          				"phone": "-",
          				"fieldValues": []
     				}
				},
				{
					headers: {
						'Api-Token': apiToken, 
						'accept': 'application/json',
						'content-type': 'application/json'
					}
				}
			)
			return res.data
		} catch (e) {
			logger.error('request error', e)
			return {
				msg: "contact exists"
			}
		}
	} 

}