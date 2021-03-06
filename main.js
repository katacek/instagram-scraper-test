const Apify = require('apify');
const { instagramTest } = require('./helper');

Apify.main(async () => {

       
        const input = await Apify.getInput();
        const slackToken = input.slackToken || process.env.slackToken;
        const resultAll = [];

        for(testCondition of input.testsConditions)
        {
            let result = await instagramTest(input.general,testCondition.input,testCondition.typeControl);
            result.test = testCondition.name;
            resultAll.push(result);    

        } 

        // const resultAll = [];
        // await Promise.all(testJson.testsConditions.map(async (x)=>
        //     {
        //         let result = await instagramTest(testJson.general,x.input,x.typeControl);
        //         result.test = x.name;
        //         console.log(result);
        //         resultAll.push(result);


        //     }));

        /// all tests done

        console.log('ALL TESTS DONE') 
        console.log(resultAll);

        const combinationsToCheck = [];
        let sendNotification = resultAll.some(x=>             
                x.resultStatus !== 'Run was succesfull! All wanted results were downloaded.' ||
                x.typeOfResultValues !== 'Type of all checked output values is in compliance with the expected one.'
        ) 

        resultAll.forEach(x => {
            if(
                x.resultStatus !== 'Run was succesfull! All wanted results were downloaded.' ||
                x.typeOfResultValues !== 'Type of all checked output values is in compliance with the expected one.'
                )
            {
                combinationsToCheck.push(x.combinationTested)
            }
        })
        await Apify.setValue('OUTPUT', resultAll);
        const urlForKVS = `https://api.apify.com/v2/key-value-stores/${Apify.getEnv().defaultKeyValueStoreId}/records/OUTPUT?disableRedirect=true`
        console.log(`See the results: ${urlForKVS}`)

        const failedCombinations = [];
        resultAll.forEach(x => {
            if(x.resultStatus === 'Actor failed completely, no results downloaded.')
            {
                failedCombinations.push(x.combinationTested)
            }
        })

        let buildText = ''
        
        if(input.general.build) {
            buildText = '(build beta)'
        } else {
            buildText = '(main version)'
        }

        if (sendNotification && slackToken) {  

            
                const slackMessageActor = {
                "token": slackToken,
                "text": `For following combinations ${combinationsToCheck} / ${failedCombinations}, the ${input.general.scraper} ${buildText} test did not finish right, see the results: ${urlForKVS}.`,
                "channel": "#public-actors-tests-notifications"
            }
        
            await Apify.call('katerinahronik/slack-message', slackMessageActor)

            console.log(`Slack notification sent.`);
            console.log(slackMessageActor.text)
        }
    

});
