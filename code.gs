function GPT(Input) {
  
  const GPT_API = "INSERT API KEY";
  const BASE_URL = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GPT_API}`
    };


  const options = {
      headers,
      method: "GET",
      muteHttpExceptions: true,
        payload: JSON.stringify({
        "model": "gpt-4",
        "messages": [{
          "role": "system",
          "content": ""
        },
        {
          "role": "user",
          "content": Input
        }
        ],
        "temperature": 0.5
      })
  }
  const response = JSON.parse(UrlFetchApp.fetch(BASE_URL, options));
  // console.log(response)
  console.log(response.choices[0].message.content);
  return response.choices[0].message.content
}
