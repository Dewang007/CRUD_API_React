import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    position: 'sticky',
    top: 0,
  },
  gridContainer: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  descriptionField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& textarea': {
        minHeight: '100px',
      },
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;