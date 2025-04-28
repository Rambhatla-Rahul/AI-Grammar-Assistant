const express = require('express');
const axios = require('axios');
const analyzeRoute = express.Router();


analyzeRoute.post('/', async (req, res) => {
    const {sentence} = req.body;
    try{
        console.log('working');
        
        const response = await axios.post('https://api.openai.com/v1/chat/completions',{
            model: 'gpt-4o-mini',
            messages:[{
                role:'system',
                content:`You are a helpful assistant that rephrases sentences. Only return the rephrased sentences without any additional comments or context.`,
                

            },
            {
                role:'user',
                content: sentence,
            },
        ],
        max_tokens: 150,
        n:3,
        stop: null,
        temperature: 0.7,
        },{
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            }
    });
    const rephrasedSentences = response.data.choices.map((choice)=> choice.message.content);
    res.status(200).json(rephrasedSentences || []);
    
    }catch(e){
        console.error(e);
        return res.status(500).json({error: 'An error occurred while processing the request.'});
    }

})

module.exports = analyzeRoute;