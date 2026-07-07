import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-slate-700">

      {/* Header */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-3">

        <span className="text-sm uppercase tracking-wider text-gray-400">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg px-3 py-1 text-sm hover:bg-slate-700 transition"
        >
          {copied ? (
            <>
              <FiCheck />
              Copied
            </>
          ) : (
            <>
              <FiCopy />
              Copy
            </>
          )}
        </button>

      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "15px",
          padding: "20px",
        }}
        showLineNumbers
      >
        {value}
      </SyntaxHighlighter>

    </div>
  );
};

export default CodeBlock;