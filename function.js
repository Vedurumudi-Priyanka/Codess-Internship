// Functions for processing data

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
 
 // Function to process list data
 function listProcessing(listData) 
 {
    // {
    //     type: "LIST",
    //         options: ["Tea", "Coffee", "Soft drinks", "Water"],
    //     responses: ["Coffee", "Coffee", "Tea", "Soft drinks", "Coffee", "Coffee", "Water"]
    // },
 
 
    const LIST = {};
 
    const options = listData.options;
    //console.log(options);

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

// Function to process MCQ data

function mcqProcessing(mcqData)
{
    // {
    //     type: "MCQ",
    //     options: ["England", "Australia", "UAE", "Malaysia"],
    //     responses: ["England" , "Norway", "England", "France", "England", "Malaysia", "UAE"]
    // },

    //document.write(mcqData.type, "<br><br>");

    const mcqOptions = mcqData.options;
    const mcqResponses = mcqData.responses;

    const MCQ = {};

    for(let i = 0; i < mcqOptions.length; i++)
    {
        MCQ[mcqOptions[i]] = 0;
    }

    // Object in MCQ for "other options"
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

    // for(const key of Object.keys(MCQ))
    // {
    //     //console.log(key);
        
    //     if(key == 'Other')
    //     {
    //         document.write("<br>", key, ":", "<br>");

    //         //console.log(typeof MCQ[key]);
    //         for(const j of Object.keys(MCQ[key]))
    //         {
    //             //console.log(MCQ.Other[j]);
    //             document.write(j, "  ->  ", MCQ[key][j], "<br>");
    //         }
    //     }
    //     else
    //     {
    //         document.write(key, "  ->  ", MCQ[key], "<br>");
    //     }
    // }
    
    // document.write("<br><br><br>");

}

mcqProcessing(data[1]);


// Function for processing checkbox data
function checkboxProcessing(cbData)
{
    // {
    //     type: "CHECKBOX",
    //     options: ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
    //     responses: [["Five star", "Milky bar", "Munch", "KitKat"],
    //             ["KitKat"],
    //             ["Five star", "Milky bar", "Munch", "KitKat"],
    //             ["KitKat"],
    //             ["Dairy milk"],
    //             ["Dairy milk"],
    //             ["Dairy milk", "KitKat"]
    //         ]
    // }

    // document.write(cbData.type, "<br><br>");
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

    // for(key of Object.keys(CHECKBOX))
    // {
    //     document.write(key, "  ->  ", CHECKBOX[key], "<br>");
    // }
}

checkboxProcessing(data[2]);
