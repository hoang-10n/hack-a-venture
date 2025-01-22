"use client"
import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyB2TWRDePdi7KQ5qpqOLRwbHjY0qS0tN14');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const prompt = `
when I input an agricultural crop, you will choose the most well-known symptom of that crop with the most common disease, then give me the names of the 5 most closely-related diseases with this symptom with percentage accuracy with 2 decimal digits (as convincing as possible)
You should return answer in json like this and nothing else: 
{
    "plant": "Cotton",
    "symptom": "leaf curl",
    "diseases": [
        {
            "name": "Cotton leaf curl virus",
            "accuracyPercentage": 98
        },
        {
            "name": "Fusarium wilt",
            "accuracyPercentage": 75
        },
        {
            "name": "Verticillium wilt",
            "accuracyPercentage": 72
        },
        {
            "name": "Bacterial blight",
            "accuracyPercentage": 68
        },
        {
            "name": "Alternaria leaf spot",
            "accuracyPercentage": 65
        }
    ]
}
Now do the same thing with apple`

const Chat = () => {
    const [search, setSearch] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    // Generative AI Call to fetch dishes

    async function aiRun() {
        setLoading(true)
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false)
    }

    // button event trigger to consume gemini Api

    const handleClick = () => {
        aiRun();
    }

    return (
        <div>
            <h1>Generative AI Restaurant App!</h1>
            <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

            <div style={{ display: 'flex' }}>
                <input placeholder='Search Food with Category using Generative AI' onChange={(e) => handleChangeSearch(e)} />
                <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
            </div>

            {
                loading == true && search != '' ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        <p>{response}</p>
                    </div>
            }
        </div>
    );
};


export default Chat