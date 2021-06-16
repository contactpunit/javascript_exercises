function validateLicense(license) {
    // should start with pb case insensitive
    // following 4 times dash (-) and 8 chars which can be upper case chars or digits
    if (!license.toLowerCase().startsWith('pb')) return false
    return (/^[Pp][bB](?:-[A-Z0-9]{8}){4}$/).test(license)

}

console.log(validateLicense('PB-U8N435EH-PG65PW87-IXPWQG5T-898XSZI4'))
console.log(validateLicense('pb-U8N435EH-PG65PW87-IXPWQG5T-898XSZI4'))
console.log(validateLicense('PB-U8N435EH-PG65PW87-IXPWQG5T-898XSZ..'))