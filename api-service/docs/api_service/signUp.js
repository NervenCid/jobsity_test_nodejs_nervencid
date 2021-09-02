module.exports = {
    post:{
        tags:['API Operations'],
        description: "Create new user",
        operationId: "signUp",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/userSignUp'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "Register succesful"
            },
            '404':{
                description: "The user already exist"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}