const Apify = require('apify');

exports.instagramTest = async function (input, testInput, testValuesTypes) {
    try{
        testresults = {};
        const scraper = input.scraper
        const build = input.build
               
        testresults.combinationTested = `${testInput.searchType} & ${testInput.resultsType}`
        if (testInput.directUrls){
            if(testInput.directUrls[0].includes("/p/")){
                testresults.combinationTested = `direct urls - post & ${testInput.resultsType}`
            } else {
                testresults.combinationTested = `direct urls - profile & ${testInput.resultsType}`
            }
        }

        let numberOfWantedResults = 0
        if(testresults.combinationTested === 'user & posts' || testresults.combinationTested === 'place & posts' || testresults.combinationTested === 'hashtag & posts'){
            numberOfWantedResults = testInput.searchLimit * testInput.resultsLimit;
        } else if(testresults.combinationTested === 'user & details'){
            numberOfWantedResults = testInput.searchLimit;
        } else if(testresults.combinationTested === 'direct urls - profile & details'){
            numberOfWantedResults = testInput.directUrls.length;
        } else if(testresults.combinationTested === 'direct urls - profile & posts' || testresults.combinationTested === 'direct urls - post & comments'){
            numberOfWantedResults = testInput.directUrls.length * testInput.resultsLimit;
        } else {
            numberOfWantedResults = 'not got it'
            console.log('check number of results wanted')
        }

        testresults.numberOfResultsWanted = numberOfWantedResults;
        const inputMessage = `Checking for combination ${testresults.combinationTested}. ${numberOfWantedResults} results wanted.`
        console.log(inputMessage)

        const runInfo = await Apify.call(scraper, testInput, { ...input.build, waitSecs: 0  });
        const runId = runInfo.id
        const test = await Apify.utils.exports.waitForRunToFinish({ actorId: "shu8hvrXbJbY3Eb9W", runId: runId })
        //const test= await Apify.call(scraper, testInput, build)

        const datasetId = test.defaultDatasetId
        //const runId = test.id

        const resultDatasetIdMessage=`Results saved in dataset with id ${datasetId}, run id ${runId}.`
        console.log(resultDatasetIdMessage)
        testresults.datasetId = datasetId
        testresults.runId = runId


        const testDataset = await Apify.openDataset(datasetId)
        const testResults = await testDataset.getInfo()
        const testNumberOfResults = testResults.itemCount
        testresults.numberOfResults = testNumberOfResults

        const testDatasetData = await testDataset.getData()
        
        // testing the overall results numbers
        if(testNumberOfResults>0){
            console.log('Results exists')
            } else {
                testresults.resultStatus = 'Something is wrong, no results downloaded :-( '   ;
                sendNotification = true      
            }
            
        console.log(`Number of saved results is ${testNumberOfResults}..`)

        if(testNumberOfResults<numberOfWantedResults){
            console.log('Not all results downloaded')
            testresults.resultStatus = 'Not all results downloaded';
            sendNotification = true
        } else if (testNumberOfResults === numberOfWantedResults)
        {
            console.log('Run was succesfull! All wanted results were downloaded.')
            testresults.resultStatus = 'Run was succesfull! All wanted results were downloaded.'
        } else if (testNumberOfResults > numberOfWantedResults)
        {
        console.log('Downloaded more results than wanted, weird...')
        testresults.resultStatus = 'Downloaded more results than wanted, weird...';
        sendNotification = true
        }

        // testing if specific output keys contains string / integer value 
        // iterate through dataset
        for(let i = 0; i<testNumberOfResults; i++){
            // iterate through testValueTypes
            let everythingOk=true;
            for(entry of Object.entries(testValuesTypes)){
                if(
                    // ie testDatasetData.items[i][queryUsername] === [string]
                    typeof testDatasetData.items[i][entry[0]] !== entry[1]
                ) 
                {
                    testresults.typeOfResultValues = `Type of some output values differs from the expected one. Item number ${i}, key: "${entry[0]}" is not type of ${entry[1]}`
                    // if at least one is not ok, quit inner cycle
                    everythingOk=false;
                    break;
                } else {
                    testresults.typeOfResultValues = 'Type of all checked output values is in compliance with the expected one.'
                }
            }

            if (!everythingOk)
            {
                // if at least one is not ok, quit outer cycle
                break;
            }
            
        }
        
        
        console.log('TEST ended') 
        return testresults;

    } catch (e){
        console.log('TEST failed')
        console.log(e)
        testresults.resultStatus = 'Actor failed completely, no results downloaded.'
        return testresults;
    }
  }

