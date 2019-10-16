import React from "react";
import { DialogTitle, Dialog as MUIDialog } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles/dialog.module.scss";

const Dialog = props => {
  const { children, open, title, onNav, navTitle, ...other } = props;

  let dialogTitle = null;
  if (title && title.length > 0) {
    dialogTitle = <DialogTitle>{title}</DialogTitle>;
  }

  const onDialogClose = (e, reason) => {
    onNav(e);
  };

  return (
    <div>
      <MUIDialog
        fullWidth={false}
        className={styles.dialog}
        open={open}
        onClose={onDialogClose}
        {...other}
        classes={{
          paper: styles.paper
        }}
      >
        <div className={styles.dialogWrapper}>
          {dialogTitle}

          <div className={styles.dialogContents}>{children}</div>
        </div>
      </MUIDialog>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired
};

export default Dialog;
