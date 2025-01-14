/* eslint-disable react/prop-types */
import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar({
  open,
  wishlistOpen,
  setOpen,
  setWishlistOpen,
  snackbarMessage,
  snackbarMessage2,
}) {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen && setOpen(false);
    wishlistOpen && setWishlistOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open || wishlistOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {auth || window.location.pathname !== "/OrderSummary" ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {open && snackbarMessage}
            {wishlistOpen && snackbarMessage2}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {"User is not Logged In, please login First"}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
