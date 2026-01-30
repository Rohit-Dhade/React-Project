import React, { use } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import './note.scss'

const Note = ({onClose}) => {
  const [markdown, setmarkdown] = useState(null);

  useEffect(() => {
    fetch("../../../note.txt")
      .then((res) => res.text())
      .then((text) => setmarkdown(text));
  }, []);

  return (
    <MacWindow func={onClose}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
