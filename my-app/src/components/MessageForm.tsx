import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import { setegid } from 'process';

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

const MessageForm: React.FC<Props> = () => {
    const classes = useStyles();

    // States for the different forms
    const [name, setName] = useState<string>("");
    const [phonenumber, setPhonenumber] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = () => {
        console.log(
            `Submitted\nNavn: ${name}, Telefon: ${phonenumber}
            Firma:: ${company}
            Epost: ${email}
            Message: ${message}`
        );
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
                        id="name-input"
                        label="Navn"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phonenumber-input"
                        label="Telefon"
                        onChange={(e) => setPhonenumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="company-input"
                        label="Firma"
                        fullWidth
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email-input"
                        label="E-post"
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="message-input"
                        label="Melding"
                        multiline
                        fullWidth
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        endIcon={<EmailIcon />}
                        onClick={handleSubmit}
                    >
                        Send inn
                    </Button>

                </Grid>
            </Grid>
        </div >
    );
}

export default MessageForm;
