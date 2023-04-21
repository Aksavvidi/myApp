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
        "/api/userproduct/findAll":{
            "get":{
                "tags": [
                    "User and Products"
                ],
                "summary": "Get all Users with their products  in system",
                "responses":{
                    "200":{
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User and Products"
                        }
                    }
                }
            }
        },
        "/api/userproduct/findOne/{username}": {
            "get":{
                "tags": [
                    "User and Products"
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
        },
        "/api/userproduct/create":{
            "post": {
                "tag":[
                    "User and Products"
                ],
                "description": "Create new product for user in system",
                "parameters":[{
                    "name": "Parameters for User and Products",
                    "in" : "body",
                    "description": "Product that we want to add to user",
                    "schema":{
                       "type":"object",
                       "properties":{
                        "username": {"type":"string"},
                        "product": { "type": "string" },
                        "cost": { "type": "number" },
                        "quantity": { "type": "number"},
                    },
                    "required": ["username", "product"]
                  }    
                }],
                "produces":["application/json"],
                "responses":{
                    "200":{
                        "description": "New product is created",
                        "schema":{
                            "$ref":"#/definitions/Products"
                        }
                    }
                }
            }
        },
        "/api/userproduct/update":{
            "patch":{
                "tags":[
                    "User and Products"
                ],
                "description":"Update product from user system",
                "parameters":[{
                    "name": "update product from user in system",
                    "in":"body",
                    "description": "Product of user that we will update",
                    "schema":{
                        "type": "object",
                        "properties":{
                            "username": {"type":"string"},
                            "product": { "type": "string" },
                            "cost": { "type": "number" },
                            "quantity": { "type": "number"},
                        },
                        "required":["username", "product"]
                    }
                }],
                "produces":["application/json"],
                "responses": {
                    "200":{
                        "description": "Update a product of user",
                   
                    }
            }
        },
        "/api/userproduct/delete/{username}/{id}":{
            "delete":{
                "tags":[
                    "User and Products"
                ],
                "description":"Delete product from user in system",
                "parameters":[{
                    "name":"username",
                    "in": "path",
                    "description": "Username that we want to find"
                },
                    {
                    "name":"product",
                    "in": "path",
                    "description": "Product that we will delete"
                }],
                "response":{
                    "200":{
                        "description": "Delete a product from user"
                    }
                }
            }
        },
        "/api/products/findAll":{
            "get":{
                "tags": [
                    "Products"
                ],
                "summary": "Get all Products  in system",
                "responses":{
                    "200":{
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Products"
                        }
                    }
                }
            }
        },
        "/api/products/findOne/{id}":{
            "get":{
                "tags": [
                    "Products"
                ],
                "parameters":[
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "Id of product",
                        "type":"string"
                    }
                ],
                "summary": "Get a product in system",
                "responses":{
                    "200":{
                        "description": "Product find",
                        "schema": {
                            "$ref": "#/definitions/Products"
                        }
                    }
                }
            }
        },
        "/api/products/create":{
            "post": {
                "tag":[
                    "Products"
                ],
                "description": "Create new product in app",
                "parameters":[{
                    "name": "Parameters for products",
                    "in" : "body",
                    "description": "Product parameters that we will create",
                    "schema":{
                       // "$ref": "#/definitions/Products"
                       "type":"object",
                       "properties":{
                        "product": { "type": "string" },
                        "cost": { "type": "number" },
                        "description": { "type": "string" },
                        "quantity": { "type": "number"},
                    },
                    "required": ["product", "id"]
                  }    
                }],
                "produces":["application/json"],
                "responses":{
                    "200":{
                        "description": "New product is created",
                        "schema":{
                            "$ref":"#/definitions/Products"
                        }
                    }
                }
            }
        },
        "/api/products/update":{
            "patch":{
                "tags":[
                    "Products"
                ],
                "description":"Update product in system",
                "parameters":[{
                    "name": "update product in system",
                    "in":"body",
                    "description": "Product that we will update",
                    "schema":{
                        "type": "object",
                        "properties":{
                            "product": { "type": "string" },
                            "cost": { "type": "number" },
                            "description": { "type": "string" },
                            "quantity": { "type": "number"},
                        },
                        "$ref": "#/components/schemas/Products",
                        "required":["product"]
                    }
                }],
                "produces":["application/json"],
                "responses": {
                    "200":{
                        "description": "Update product",
                   
                    }
            }
        },
        "/api/products/delete/{id}":{
            "delete":{
                "tags":[
                    "Products"
                ],
                "description":"Delete product from the system",
                "parameters":[{
                    "name":"id",
                    "in": "path",
                    "description": "Id of the product that we will delete",
                    "schema": {
                        "$ref": "#/components/schemas/Product",
                      }
                }],
                "produces": [
                    "application/json"
                  ],
                "response":{
                    "200":{
                        "description": "Deleted product"
                    }
                }
            }
        },

        }
    }
}
}
