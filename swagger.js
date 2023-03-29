const m2s = require('mongoose-to-swagger');
const User  = require('./models/user.model');
const Product = require('./models/products.models');

exports.options = {
    "definitions":{
        User: m2s(User),
        Product:m2s(Product)
    },
    "swagger" : "2.0",
    "info" :{
        "version": "1.0.0",
        "description": "Products Project Application API",
        "title": "Products CRUD API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "Users",
            "description": "API for users"
        },
        {
            "name": "Users and Products",
            "description" : "API for users and their products"
        },
        {
            "name": "Products",
            "description": "API for products"
        }
    ],
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths" : {
        "/api/user/findAll":{
            "get":{
                "tags": [
                    "Users"
                ],
                "summary": "Get all users  in system",
                "responses":{
                    "200":{
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
   
        "/api/user/findOne/{username}":{
            "get":{
                "tags": [
                    "Users"
                ],
                "parameters":[
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of user",
                        "type":"string"
                    }
                ],
                "summary": "Get a users  in system",
                "responses":{
                    "200":{
                        "description": "User find",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/create":{
            "post": {
                "tag":[
                    "Users"
                ],
                "description": "Create new user in app",
                "parameters":[{
                    "name": "Parameters for user",
                    "in" : "body",
                    "description": "Users parameters that we will create",
                    "schema":{
                       // "$ref": "#/definitions/User"
                       "type":"object",
                       "properties":{
                        "name": { "type": "string" },
                        "surname": { "type": "string" },
                        "username": { "type": "string" },
                        "password": { "type": "string"},
                        "email": { "type": "string" },
                        "address": {
                          "type": "object",
                          "properties": {
                            "area": { "type": "string" },
                            "road": { "type": "string" }
                          },
                       },
                       "phone": {
                        "type":"array",
                        "items":{
                          "type": "object",
                          "properties": {
                            "type": { "type": "string" },
                            "number": { "type": "string" }
                          },
                        },
                      },
                    },
                    "required": ["username", "email"]
                  }    
                }],
                "produces":["application/json"],
                "responses":{
                    "200":{
                        "description": "New user is created",
                        "schema":{
                            "$ref":"#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/update":{
            "patch":{
                "tags":[
                    "Users"
                ],
                "description":"Update user in system",
                "parameters":[{
                    "name": "update user in system",
                    "in":"body",
                    "description": "User thart we will update",
                    "schema":{
                        "type": "object",
                        "properties":{
                            "username":{"type": "string"},
                            "name":{"type":"string"},
                            "surname":{"type":"string"},
                            "email":{"type":"string"},
                            "address":{
                                "type":"object",
                                "properties":{
                                    "area":{"type":"string"},
                                    "road":{"type":"string"},
                                },
                            },
                            "phone":{
                                "type":"array",
                                "items":{
                                    "type":"object",
                                    "properties":{
                                        "type":{"type":"string"},
                                        "number":{"type":"string"},
                                    },
                                },
                            },
                        },
                        "required":["email"]
                    }
                }],
                "produces":["application/json"],
                "responses": {
                    "200":{
                        "description": "Update user",
                   
                                        }
            }
        }
        },

        "/api/user/delete/{username}":{
            "delete":{
                "tags":[
                    "Users"
                ],
                "description":"Delete user from the system",
                "parameters":[{
                    "name":"username",
                    "in": "path",
                    "description": "Username that we will delete"
                }],
                "response":{
                    "200":{
                        "description": "Deleted user"
                    }
                }
            }
        },
        "/api/userproduct/findOne/{username}": {
            "get":{
                "tags": [
                    "User nad Products"
                ],
                "parameters":[{
                    "name": "username",
                    "in": "path",
                    "description":"Find user's products",
                    "type":"string"
                }],
                "response":{
                    "200":{
                        "description": "User and Products"
                    }
                }

            }
        }
    }
}
