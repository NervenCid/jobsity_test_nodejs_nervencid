module.exports = {
    post:{
        tags:['API Operations'],
        description: "Sign In for existing user",
        operationId: "signIn",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/userSignIn'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "Access Granted"
            },
            '404':{
                description: "Access Denied"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}