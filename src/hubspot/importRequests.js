const contactsRequest = {
  "name": "HS-Faker Imports",
  "files": [
    {
      "fileName": "hs-contacts.csv",
      "fileFormat": "CSV",
      "fileImportPage": {
        "hasHeader": "true",
        "columnMappings": [
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Birthdate",
            "propertyName": "date_of_birth"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "First Name",
            "propertyName": "firstname"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Last Name",
            "propertyName": "lastname"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Email",
            "propertyName": "email"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Owner",
            "propertyName": "hubspot_owner_id"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Job Title",
            "propertyName": "jobtitle"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Phone Number",
            "propertyName": "phone"
          }
        ]
      }
    }
  ]
}

const companiesRequest = {
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

const dealsRequest = {
  "name": "HS-Faker Imports",
  "files": [
    {
      "fileName": "hs-deals.csv",
      "fileFormat": "CSV",
      "fileImportPage": {
        "hasHeader": "true",
        "columnMappings": [
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Close Date",
            "propertyName": "closedate"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Deal Name",
            "propertyName": "dealname"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Deal Stage",
            "propertyName": "dealstage"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Owner",
            "propertyName": "hubspot_owner_id"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Deal Type",
            "propertyName": "dealtype"
          },
          {
            "columnObjectTypeId": "0-2",
            "columnName": "Amount",
            "propertyName": "amount"
          },
        ]
      }
    }
  ]
}

export const selectedImport = (file) => {
  switch(file) {
    case '../../hs-companies-one.csv':
      return companiesRequest
    case '../../hs-companies-one.csv':
      return contactsRequest
    default:
      return dealsRequest
  }
}
