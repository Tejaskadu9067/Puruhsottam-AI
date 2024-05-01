import React, { useState } from "react";
import axios from 'axios';

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBh67bMDisKu9HeyfSEvDVnt51WW4QTo7Y", {
      "contents": [{ "parts": [{ "text": question }] }]
    });

    const data = response.data;
    const parsedAnswer = parseAnswer(data);
    setAnswer(parsedAnswer);
  }

  function parseAnswer(data) {
    if (!data || !data.candidates || data.candidates.length === 0) {
      return "No answer found";
    }

    const content = data.candidates[0].content;

    if (!content || !content.parts || content.parts.length === 0) {
      return "No answer found";
    }

    const text = content.parts[0].text;

    // Check if text contains bullet points
    if (text.includes('*')) {
      return parsePoints(text);
    } else {
      return <p>{text}</p>;
    }
  }

  function parsePoints(text) {
    const paragraphs = text.split('\n\n'); // Split text into paragraphs

    return (
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{parseParagraph(paragraph)}</p>
        ))}
      </div>
    );
  }

  function parseParagraph(paragraph) {
    const points = paragraph.split('*').filter(point => point.trim() !== ''); // Split into points (assuming * indicates bullet points)

    return (
      <ul className="list-disc ml-4">
        {points.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="absolute top-[5%] right-[20%] w-[60%] py-10 flex justify-center text-zinc-600 font-semibold text-xl">
        <p className="block text-white font-sans text-base leading-tight tracking-8 mb-4 ">
          {answer}
        </p>
      </div>

      <div className="absolute top-[74%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
        <input value={question} onChange={(e) => setQuestion(e.target.value)} className="bg-zinc-900 h-20 w-[50%] text-white"/>
      </div>

      <div className="absolute top-[85%] w-full py-10 flex justify-center text-white font-semibold text-xl">
        <button onClick={generateAnswer} className="w-24 bg-blue-500">Send</button>
      </div>
    </>
  );
}

export default Chat;
