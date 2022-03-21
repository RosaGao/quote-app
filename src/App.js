import { useState, useEffect } from "react";
import Quote from "./components/Quote";
import * as API from "./services/api";
import { Center } from "@chakra-ui/react";


function App() {
  const [darkMode, setMode] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(()=>{
    API.getTodayQuote()
      .then(({ quote, author })=>{
        setQuote(quote);
        setAuthor(author);
      })
      .catch((error)=>{
        console.log(error);
      });
  });

  const toggleColorMode = ()=>{
    setMode((prevMode)=>!prevMode);
  }

  const getRandomQuote = () => {
    API.getRandomQuote()
      .then(({ quote, author }) => {
        setQuote(quote);
        setAuthor(author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Center
      w="100%"
      minH="100vh"
      bgGradient={
        darkMode
          ? "linear(to-r, #2C3E50, #4CA1AF)"
          : "linear(to-r, #d9a7c7, #fffcdc)"
      }
    >
      <Quote
        getRandomQuote={getRandomQuote}
        toggleColorMode={toggleColorMode}
        darkMode={darkMode}
        quote={quote}
        author={author}
      />
    </Center>
  );
}

export default App;