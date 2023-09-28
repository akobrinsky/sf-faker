import axios from 'axios';
import open from 'open';
import fs from 'fs';
import FormData from 'form-data'

export class HubSpotBulk {
  constructor(clientId, clientSecret) {
  	this.clientId = clientId;
    this.clientSecret = clientSecret;
		this.baseUrl = "https://api.hubapi.com";
		this.accessToken = null;
		this.refreshToken = null;
  }

  async createOAuthURL () {
  	try {
			await open(`https://app.hubspot.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=http://localhost&scope=oauth%20crm.objects.contacts.read%20crm.objects.contacts.write%20crm.schemas.custom.read%20crm.objects.custom.read%20crm.objects.custom.write%20crm.objects.companies.write%20crm.schemas.contacts.read%20crm.objects.companies.read%20crm.objects.deals.read%20crm.objects.deals.write%20crm.schemas.companies.read%20crm.schemas.companies.write%20crm.schemas.contacts.write%20crm.schemas.deals.read%20crm.schemas.deals.write`);
    } catch (err) {
    	console.log(err.message)
  	}
  }
	async getAccessToken (code) {
		try {
    	const { data } = await axios.post('https://api.hubapi.com/oauth/v1/token', {
				grant_type: 'authorization_code',
  			client_id: this.clientId,
  			redirect_uri: 'http://localhost',
				client_secret: this.clientSecret,
				code: code,
			}, { headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
			}})
			this.accessToken = data.access_token;
			this.refreshToken = data.refresh_token;
			console.log(this.accessToken)
    } catch (err) {
			console.log(err)
    	console.log(err.message)
  	}
	}
	async refreshToken () {
		try {
    	const { data } = await axios.post(`${this.baseUrl}/oauth/v1/token`, {
				client_id: this.clientId,
				redirect_uri:'http://localhost',
				grant_type: 'authorization_code',
				client_secret: this.clientSecret,
				refresh_token: this.refreshToken,
			})
			this.accessToken = data.access_token;
			this.refreshToken = data.refresh_token;
    } catch (err) {
    	console.log(err.message)
  	}
	}
	async getContacts () {
		try {
    	const { data } = await axios.get(`${this.baseUrl}/crm/v3/objects/contacts`, { headers: { 'Authorization': `Bearer ${this.accessToken}` }})
			console.log(data)
    } catch (err) {
    	console.log(err.message)
  	}
	}
	async importFile (file, table) {
		const formData = new FormData()
		const importRequest = {
			"name": "HS-Faker Imports",
			"files": [
				{
					"fileName": "hs-companies-one.csv",
					"fileFormat": "CSV",
					"fileImportPage": {
						"hasHeader": "true",
						"columnMappings": [
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Name",
								"propertyName": "name"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Company Domain",
								"propertyName": "domain"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Company Owner",
								"propertyName": "hubspot_owner_id"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Type",
								"propertyName": "type"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Phone Number",
								"propertyName": "phone"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Number of Employees",
								"propertyName": "numberofemployees"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Street Address",
								"propertyName": "address"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "City",
								"propertyName": "city"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "State",
								"propertyName": "state"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "ZipCode",
								"propertyName": "zip"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Country",
								"propertyName": "country"
							},
							{
								"columnObjectTypeId": "0-2",
								"columnName": "Annual Revenue",
								"propertyName": "annualrevenue"
							}
						]
					}
				}
			]
		}
		formData.append('files', fs.createReadStream(file))
		formData.append('importRequest', JSON.stringify(importRequest))
		try {
			await axios.post(`${this.baseUrl}/crm/v3/imports`, formData, { headers: {
				'Authorization': `Bearer ${this.accessToken}`,
				'Content-Type': 'multipart/form-data'
			}})

		} catch (err) {
			console.log(err.response)
			console.log(err.message)
		}

	}
}
