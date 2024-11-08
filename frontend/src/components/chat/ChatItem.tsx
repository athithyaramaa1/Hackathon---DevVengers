import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    return message.split("```");
  }
  return [message]; 
}

function isCodeBlock(str: string) {
  return /[=;{}\[\]#\/]/.test(str); 
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();

  // AI assistant's UI
  if (role === "assistant") {
    return (
      <Box
        sx={{
          display: "flex",
          p: 2,
          bgcolor: "#004d5612",
          gap: 2,
          borderRadius: 2,
          my: 1,
        }}
      >
        <Avatar sx={{ ml: "0" }}>
          <img src="openai.png" alt="openai" width={"30px"} />
        </Avatar>
        <Box>
          {messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkDark}
                language="javascript"
              >
                {block.trim()}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} sx={{ fontSize: "20px" }}>
                {block.trim()}
              </Typography>
            )
          )}
        </Box>
      </Box>
    );
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d56",
        gap: 2,
        borderRadius: 2,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {auth?.user?.name
          ? auth?.user?.name[0] + (auth?.user?.name.split(" ")[1]?.[0] || "")
          : "U"}
      </Avatar>
      <Box>
        {messageBlocks.map((block, index) =>
          isCodeBlock(block) ? (
            <SyntaxHighlighter
              key={index}
              style={coldarkDark}
              language="javascript"
            >
              {block.trim()}
            </SyntaxHighlighter>
          ) : (
            <Typography key={index} sx={{ fontSize: "20px" }}>
              {block.trim()}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default ChatItem;
