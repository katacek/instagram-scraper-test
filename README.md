# Instagram-scraper-test

This actor tests 7 various inputs of instragram scraper and returns result including following information:
1) whether the number of scraped results is in line with the wanted number of results
2) whether specific result values types corresponds with anticipatited values types

Example of input:

```
const input = 
        {
            general:        {
                    "scraper": "jaroslavhejlek/instagram-scraper",
                    "build": {
                      "build": "beta"
                    }},
             testsConditions:
                    [
                        {
                            // TEST 1 user and posts
                            name:'TEST-1',
                            input:{
                                "search": "john",
                                "searchType": "user",
                                "searchLimit": 5,
                                "resultsType": "posts",
                                "resultsLimit": 20,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "queryUsername": "string",
                                "type": "string",
                                //"caption": "string", 
                                "url": "string", 
                                "id": "string",
                                "ownerUsername": "string",
                                "ownerId": "string",
                                //"alt": "string",
                                "commentsCount": "number",
                                "likesCount": "number"
                            }


                        },
                        { 
                            // TEST 2 places and posts
                            name:'TEST-2',
                            input:{
                                "search": "prague",
                                "searchType": "place",
                                "searchLimit": 5,
                                "resultsType": "posts",
                                "resultsLimit": 20,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "queryLocation": "string",
                                "type": "string",
                                //"caption": "string", 
                                "url": "string", 
                                "id": "string",
                                "ownerId": "string",
                                //"alt": "string",
                                "commentsCount": "number",
                                "likesCount": "number"
                            }

                        },
                        {
                            // TEST 3 hashtag and posts
                            name:'TEST-3',
                            input:{
                                "search": "run",
                                "searchType": "hashtag",
                                "searchLimit": 5,
                                "resultsType": "posts",
                                "resultsLimit": 20,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "queryTag": "string",
                                "type": "string",
                                //"caption": "string", 
                                "url": "string", 
                                "id": "string",
                                "ownerId": "string",
                                //"alt": "string",
                                "commentsCount": "number",
                                "likesCount": "number"
                            }
                        },
                        {
                            // TEST 4 search user => details
                            name:'TEST-4',
                            input:{
                                "search": "john",
                                "searchType": "user",
                                "searchLimit": 5,
                                "resultsType": "details",
                                "resultsLimit": 20,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "id": "string",
                                "username": "string",
                                "fullName": "string", 
                                "biography": "string", 
                                //"externalUrl": "string",
                                "followersCount": "number",
                                "followsCount": "number",
                                "profilePicUrl": "string",
                                "postsCount": "number",
                                "isBusinessAccount": "boolean"
                            }
                        },
                        {
                            // TEST 5 profile => details
                            name:'TEST-5',
                            input: {
                                "searchType": "user",
                                  "searchLimit": 1,
                                "directUrls": [
                                    "https://www.instagram.com/kilianjornet/?hl=cs"
                                  ],
                                "resultsType": "details",
                                "resultsLimit": 100,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "id": "string",
                                "username": "string",
                                "fullName": "string", 
                                "biography": "string", 
                                //"externalUrl": "string",
                                "followersCount": "number",
                                "followsCount": "number",
                                "profilePicUrl": "string",
                                "postsCount": "number",
                                "isBusinessAccount": "boolean"
                            }
                        },
                        {
                            // TEST 6 profile => posts
                            name:'TEST-6',
                            input:{
                                "searchType": "user",
                                "searchLimit": 1,
                                "directUrls": [
                                    "https://www.instagram.com/kilianjornet/?hl=cs"
                                    ],
                                "resultsType": "posts",
                                "resultsLimit": 100,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:{
                                "queryUsername": "string",
                                "type": "string",
                                //"caption": "string", 
                                "url": "string", 
                                "id": "string",
                                "ownerUsername": "string",
                                "ownerId": "string",
                                //"alt": "string",
                                "commentsCount": "number",
                                "likesCount": "number"
                            }
                        },
                        {
                            // TEST 7 post => comments
                            name:'TEST-7',
                            input:
                            {
                                "searchType": "user",
                                  "searchLimit": 1,
                                "directUrls": [
                                "https://www.instagram.com/p/CBN7bSLH47K/"
                                ],
                                "resultsType": "comments",
                                "resultsLimit": 100,
                                "maxRequestRetries": 2,
                                "proxy": {
                                "useApifyProxy": true,
                                "apifyProxyGroups": [
                                    "RESIDENTIAL"
                                ]
                                },
                                "expandOwners": false,
                                "likedByLimits": 0,
                                "followingLimit": 0,
                                "followedByLimit": 0
                            },
                            typeControl:
                            {
                                "id": "string",
                                "postId": "string",
                                "text": "string", 
                                "ownerId": "string", 
                                "ownerUsername": "string",
                                "ownerProfilePicUrl": "number"
                            }
                        },

                    ]
                

        }

