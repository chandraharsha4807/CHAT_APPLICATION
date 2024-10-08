import React, { useRef } from "react";
import {
  IconButton,
  InputAdornment,
  Paper,
  SvgIcon,
  TextField,
} from "@mui/material";

const ChatInputContainer = ({ handleSearch }: { handleSearch: Function }) => {
  const query = useRef("" as any);

  const handleSearchInput = () => {
    console.log(query.current.value);
    if (query.current.value?.trim()?.length) {
      handleSearch(query.current.value);
    }
    query.current.value = "";
  };

  const handleKeyDownEnter = (event: any) => {
    if (event.code === "Enter") {
      handleSearchInput();
    }
  };

  return (
    <div className="chat-input-field-container">
      <div></div>
      <Paper elevation={16}>
        <TextField
          variant="outlined"
          placeholder="Type your query here ..."
          focused
          inputRef={query}
          color="primary"
          fullWidth
          onKeyDown={(event) => handleKeyDownEnter(event)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="delete" onClick={handleSearchInput}>
                    <SvgIcon>
                      <svg
                        width="256px"
                        height="256px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#156de0"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z"
                            stroke="#4558e8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Paper>
      <div></div>
    </div>
  );
};

export default ChatInputContainer;
