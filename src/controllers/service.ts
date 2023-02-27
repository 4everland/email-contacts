import axios from "axios"
import { logger } from "../utils/logger"
import { HttpError, StatusCode } from "../utils/httperror"

export default class Service {

	static async createContract(email: string) {
		if (!this.validateEmail(email)) {
			throw new HttpError('invalid email', StatusCode.BadRequest)
		}
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
			throw new HttpError('existent email', StatusCode.BadRequest)
		}
	}

	static validateEmail(email: string) {
  		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  		return re.test(email)
	}

}