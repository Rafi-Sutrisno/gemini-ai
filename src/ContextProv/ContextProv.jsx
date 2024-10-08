import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import run from "../utils/gemini-config";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayParam = (index, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      try {
        response = await run(prompt);
        setRecentPrompt(prompt);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPreviousPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    try {
      let rspArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < rspArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += rspArray[i];
        } else {
          newResponse += "<b style='font-weight: 700;'>" + rspArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("</br>");

      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextword = newResponseArray[i];
        delayParam(i, nextword + " ");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = useMemo(
    () => ({
      previousPrompt,
      setPreviousPrompt,
      recentPrompt,
      setRecentPrompt,
      input,
      setInput,
      showResult,
      loading,
      resultData,
      onSent,
      newChat,
    }),
    [previousPrompt, recentPrompt, input, showResult, loading, resultData]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

// Add PropTypes validation
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
