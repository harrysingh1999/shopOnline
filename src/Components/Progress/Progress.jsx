import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import { Icon } from "@iconify/react";
import React from "react";

export default function Progress({ success, loading, handleOrder }) {

  return (
    <div
      className="relative mt-4 border border-black/40 py-2 rounded-xl
     flex justify-center items-center"
    >
      {success ? (
        <p className=" inline-block">Ordered Successfully!</p>
      ) : (
        <p className="inline-block  ">Order Now:</p>
      )}
   
      <div style={{ backgroundColor: success && "#50C878" }}
        className="inline-block ms-2  border border-black rounded-full p-1 hover:bg-white hover:text-sky-700">
        {success ? (
          <div className="flex items-center">
            <CheckIcon />
          </div>
        ) : (
          <div className="flex items-center" onClick={handleOrder}>
            <Icon icon="icons8:buy" width="34" />
          </div>
        )}
      </div>

      {loading && (
        <CircularProgress
          size={52}
          style={{
            color: green[800],
            position: "absolute",
            top: 0,
            left: 145,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
