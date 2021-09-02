module.exports = {    
    get:{
        tags:['API Operations'],
        description: "Get history of the requests",
        operationId: "history",
        parameters:[
            {
                name:"x-access-token",
                in:"header",
                schema:{
                    $ref:"#/components/schemas/token"
                },
                required:true,
                description: "Access token obtained after login"
            }
        ],
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