const data = [
    {
        type: "LIST",
        options: ["Tea", "Coffee", "Soft drinks", "Water"],
        responses: ["Coffee", "Coffee", "Tea", "Soft drinks", "Coffee", "Coffee", "Water"]
    },
    {
        type: "MCQ",
        options: ["England", "Australia", "UAE", "Malaysia"],
        responses: ["England" , "Norway", "England", "France", "England", "Malaysia", "UAE"]
    },
    {
        type: "CHECKBOX",
        options: ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
        responses: [["Five star", "Milky bar", "Munch", "KitKat"],
                ["KitKat"],
                ["Five star", "Milky bar", "Munch", "KitKat"],
                ["KitKat"],
                ["Dairy milk"],
                ["Dairy milk"],
                ["Dairy milk", "KitKat"]
            ]
    }
 ]
 

 function listProcessing(listData) 
 {

    const LIST = {};
 
    const options = listData.options;
   
    for(let i = 0;i < options.length; i++)
    {
        LIST[options[i]] = 0
    }
 
 
    const responses = listData.responses
    for(let i = 0; i < responses.length; i++)
    {
        LIST[responses[i]]++
        //LIST[responses[i]] = LIST[responses[i]] + 1
    } 
 
    console.log(LIST)
 }
 
 listProcessing(data[0]);

function mcqProcessing(mcqData)
{    const mcqOptions = mcqData.options;
    const mcqResponses = mcqData.responses;

    const MCQ = {};

    for(let i = 0; i < mcqOptions.length; i++)
    {
        MCQ[mcqOptions[i]] = 0;
    }

    
    MCQ.OtherFreq = 0;
    MCQ.Other = {};

    for(let i = 0; i < mcqResponses.length; i++)
    {
        if(mcqOptions.includes(mcqResponses[i]))
        {
            MCQ[mcqResponses[i]]++;
        }
        else if(mcqResponses[i] in MCQ.Other)
        {
            MCQ.Other[mcqResponses[i]]++;
            MCQ.OtherFreq++;
        }
        else
        {
            MCQ.OtherFreq++;
            MCQ.Other[mcqResponses[i]] = 1;
        }
    }

    console.log(MCQ);


}

mcqProcessing(data[1]);


function checkboxProcessing(cbData)
{
    
    const CHECKBOX = {};

    const cbOptions = cbData.options;
    const cbResponses = cbData.responses;

    var i;
    var j;

    for(i = 0; i < cbOptions.length; i++)
    {
        CHECKBOX[cbOptions[i]] = 0;
    }

    for(i = 0; i < cbResponses.length; i++)
    {
        for(j = 0; j < cbResponses[i].length; j++)
        {
            var key = cbResponses[i][j];
            CHECKBOX[key]++;
        }
    }

    console.log(CHECKBOX);

}

checkboxProcessing(data[2]);
