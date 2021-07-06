import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import MessageService from '../services/MessageService';

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);


export interface CompleteMessage {
    nameInput: string;
    phonenumberInput: string;
    companyInput: string;
    emailInput: string;
    messageInput: string;
}


const MessageForm: React.FC<Props> = () => {
    const classes = useStyles();
    // States for the different forms
    // const [name, setName] = useState<string>("");
    // const [phonenumber, setPhonenumber] = useState<string>("");
    // const [company, setCompany] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // True if there is an empty entry, false if there are no error
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);
    // const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<string>("Submit");

    const [completeMessage, setCompleteMessage] = useState<CompleteMessage>({
        nameInput: "",
        phonenumberInput: "",
        companyInput: "",
        emailInput: "",
        messageInput: "",
    });

    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(completeMessage);

        // main();

        setOpenSnackbar(true);

        // from the tutorial https://bezkoder.com/react-firebase-crud/
        // MessageService.create(completeMessage)
        //     .then(() => {
        //         console.log("Created message successfully!");
        //         setOpenSnackbar(true);
        //     })
        //     .catch((err) => {
        //         alert("Wops! Det skjedde ein feil ved leverigna av meldinga.");
        //     })
    }

    const handleButtonClick = (e: React.SyntheticEvent) => {
        // First, check if everything is okay with the buttonclick (e.i., email and message fields are not empty)
        let valid = true;
        if (!completeMessage["emailInput"]) {
            setEmailError(true);
            console.log("Email can't be empty");
            valid = false;
        }
        if (!completeMessage["messageInput"]) {
            setMessageError(true);
            console.log("Message can't be empty");
            valid = false;
        }

        if (!valid) {
            return
        }

        handleSubmitWithEmail(e);
        setOpenSnackbar(true);
        clearFields();
    }

    const clearFields = () => {
        setCompleteMessage({
            nameInput: "",
            phonenumberInput: "",
            companyInput: "",
            emailInput: "",
            messageInput: "",
        })
        setEmailError(false);
        setMessageError(false);
    }

    const handleSubmitWithEmail = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        setStatus("Sending...");
        // console.log(e);

        // const { name, email, message } = e.target.elements;

        let details = {
            // name: "gunnarkleiventest@gmail.com",
            name: completeMessage["nameInput"],
            number: completeMessage["phonenumberInput"],
            company: completeMessage["companyInput"],
            email: completeMessage["emailInput"],
            message: completeMessage["messageInput"],
        }

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details)
        });

        setStatus("Submit");
        let result = await response.json();
        setOpenSnackbar(true);


    }

    const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = e.target.value;
        const category = e.target.id;

        setCompleteMessage(prevState => {
            return { ...prevState, [category]: newValue }
        });
    }

    return (
        <div>
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                        Legg igjen ei melding her (under konstruksjon)
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="nameInput"
                        label="Navn"
                        // onChange={(e) => setName(e.target.value)}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phonenumberInput"
                        label="Telefon"
                        // onChange={(e) => setPhonenumber(e.target.value)}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="companyInput"
                        label="Firma"
                        fullWidth
                        // onChange={(e) => setCompany(e.target.value)}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="emailInput"
                        label="E-post"
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handleChange}
                        fullWidth
                        error={emailError}
                        helperText={emailError && "This field can't be empty"}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="messageInput"
                        label="Melding"
                        multiline
                        fullWidth
                        // onChange={(e) => setMessage(e.target.value)}
                        onChange={handleChange}
                        error={messageError}
                        helperText={messageError && "This field can't be empty"}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        endIcon={<EmailIcon />}
                        // onClick={handleSubmit}
                        onClick={handleButtonClick}
                    // onClick={handleSubmitWithEmail}
                    >
                        Send inn
                    </Button>

                </Grid>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                message="Melding motatt!"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div >
    );
}

export default MessageForm;
