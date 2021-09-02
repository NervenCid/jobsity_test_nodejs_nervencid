module.exports = {
    get:{
        tags:['API Operations'],
        description: "Get stock data",
        operationId: "getStock",
        parameters:[            
            {
                name:"x-access-token",
                in:"header",
                schema:{
                    $ref:"#/components/schemas/token"
                },
                required:true,
                description: "Access token obtained after login"
            },
            {
                name:"symbol",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/symbol"
                },
                required:true,
                description: "Symbol of the stock, valid symbols can be obtained from 'https://stooq.com/t/?i=518'"
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