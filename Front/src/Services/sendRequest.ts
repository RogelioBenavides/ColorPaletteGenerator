import axios from "axios";

export const sendRequest = async (text: string) => {
  try {
    const response = await axios.post(
      "/api/openai",
      {
        inputText: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
