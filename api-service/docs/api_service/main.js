module.exports = {
    get:{
        tags: ['API Operations'],
        description: "Main route",
        operationId: 'getTodos',
        parameters:[],
        responses:{
            '200':{
                description:"API Online",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/main'
                        }
                    }
                }
            }
        }
    }
}