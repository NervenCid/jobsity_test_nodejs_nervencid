
module.exports = {
    components:{
        schemas:{
            userSignUp:{
                type:'object',
                properties:{
                    username:{
                        type:'string',
                        description:"User Name",
                        example:"Diego"
                    },
                    email:{
                        type:'string',
                        description:"unique email of the user",
                        example:"example@example"
                    },
                    password:{
                        type:"string",
                        description:"Access password",
                        example:"12345"
                    }
                }
            },
            userSignIn:{
                type:'object',
                properties:{
                    email:{
                        type:'string',
                        description:"unique email of the user",
                        example:"example@example"
                    },
                    password:{
                        type:"string",
                        description:"Access password",
                        example:"12345"
                    }
                }
            },
            main:{
                type:'object',
                properties:{
                    message:{
                        type:'string',
                        description: 'API Online',
                        example: 'API Online'
                    }
                }
            },            
            history:{
                type:'object',
                properties:{
                    message:{
                        type:'string',
                        description: 'API Online',
                        example: 'API Online'
                    }               
                }
            },
            token:{
                type:'string',
                properties:{
                    symbol:{
                        type:'string',
                        description:"Valid token obtained after login"
                    }                    
                }
            },
            symbol:{
                type:'string',
                description:"Symbol for the stock data, valid symbols can be obtained from 'https://stooq.com/t/?i=518'",
                example: "ACI.US"
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}