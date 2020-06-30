const Apify = require('apify');
const { instagramTest } = require('./helper');

Apify.main(async () => {

        const input = {
            "scraper": "jaroslavhejlek/instagram-scraper",
            "build": {
              "build": "beta"
            }
          }

        const scraper = input.scraper
        const build = input.build

        let testResults = [];
        let test1results = {};        
        let test2results = {};  
        let test3results = {};
        let test4results = {};
        let test5results = {};
        let test6results = {};
        let test7results = {};  
      
         // TEST 1 search user and posts
        console.log('TEST-1');

        const test1Input =
        {
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
        }

        const test1ValuesTypes = 
        {
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
    
        
        const results1  = await instagramTest(input, test1Input, test1ValuesTypes);
        test1results.results = results1
        test1results.results.test = 'TEST-1'
        testResults.push(test1results)

        // TEST 2 places and posts
       
        console.log('TEST-2');
            
        const test2Input =
        {
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
        }

        const test2ValuesTypes = 
        {
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
        
        const results2  = await instagramTest(input, test2Input, test2ValuesTypes);
        test2results.results = results2
        test2results.results.test = 'TEST-2'
        testResults.push(test2results)

        // TEST 3 hashtag and post

        console.log('TEST-3');
            
        const test3Input =
        {
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
        }

        const test3ValuesTypes = 
        {
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
        
        const results3  = await instagramTest(input, test3Input, test3ValuesTypes);
        test3results.results = results3
        test3results.results.test = 'TEST-3'
        testResults.push(test3results)

        // TEST 4 search user => details

        console.log('TEST-4');

        const test4Input =
        {
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
        }

        const test4ValuesTypes = 
        {
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
          
        const results4 = await instagramTest(input, test4Input, test4ValuesTypes);
        test4results.results = results4
        test4results.results.test = 'TEST-4'
        testResults.push(test4results)

        // TEST 5 profile => details
        console.log('TEST-5');
      
        const test5Input =
        {
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
        }

        const test5ValuesTypes = 
        {
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
          
        const results5 = await instagramTest(input, test5Input, test5ValuesTypes);
        test5results.results = results5
        test5results.results.test = 'TEST-5'
        testResults.push(test5results)

        // TEST 6 profile => posts
    
        console.log('TEST-6');

        const test6Input =
        {
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
        }

        const test6ValuesTypes = 
        {
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
          
        const results6 = await instagramTest(input, test6Input, test6ValuesTypes);
        test6results.results = results6
        test6results.results.test = 'TEST-6'
        testResults.push(test6results)

        // TEST 7 post => comments
        console.log('TEST-7');

        const test7Input =
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
        }

        const test7ValuesTypes = 
        {
            "id": "string",
            "postId": "string",
            "text": "string", 
            "ownerId": "string", 
            "ownerUsername": "string",
            "ownerProfilePicUrl": "number"
        }
          
        const results7 = await instagramTest(input, test7Input, test7ValuesTypes);
        test7results.results = results7
        test7results.results.test = 'TEST-7'
        testResults.push(test7results)

        /// all tests done

        console.log('ALL TESTS DONE') 

        await Apify.setValue('OUTPUT', testResults);
        const urlForKVS = `https://api.apify.com/v2/key-value-stores/${Apify.getEnv().defaultKeyValueStoreId}/records/OUTPUT?disableRedirect=true`
        console.log(`See the results: ${urlForKVS}`)

        let buildText = ''
        
        if(input.build) {
            buildText = '(build beta)'
        } else {
            buildText = '(main version)'
        }

        if (sendNotification && slackToken) {  

            
                const slackMessageActor = {
                "token": slackToken,
                "text": `At least one of the ${scraper} ${buildText} tests did not finish right, see the results: ${urlForKVS}`,
                "channel": "#public-actors-tests"
            }
        
        
            await Apify.call('katerinahronik/slack-message', slackMessageActor)

            console.log(`Slack notification sent.`);
            console.log(slackMessageActor.text)
        }
    

});