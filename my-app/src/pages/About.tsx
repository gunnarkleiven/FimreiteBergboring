import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface AboutProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const About: React.FC<AboutProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" paragraph>
                    <br />
                    Om oss
                </Typography>
                <Typography variant="body1" align="center">

                    Me er eit selskap med base i Sogndal som driv med bergboring. Me starta våren 2014 og er no 4 ansatte. Arbeidsområdet er Sogn og Fjordane, Hordaland og Møre og Romsdal, men me er fleksible utover dette.

                    <br />
                    Eigar er Per Magne Fimreite.
                    <br />
                    <br />
                    <br />
                    Me tilbyr tenester til konkurransedyktige prisar innan:
                </Typography>
                <Typography variant="body1" paragraph>
                    <br />
                    - Boring etter vatn for vassforsyning til gardsbruk, bustadhus, hytter, bustadfelt osv.
                    <br />
                    - Boring av energibrønnar til varmepumper i bustadhus, dette er ei eingongsinvistering som gjer at du kan utnytte ein miljøvenleg og fornybar energiresurs.
                    <br />
                    - Gjennomboring av fjellknausar, kryssing av vegar, tomter og eksisterande bebyggelse. Dette er eit rimleg og miljøvenleg alternativ til konvensjonelle grøfter.
                    <br />
                    -Fundamentering: Er ein teknikk som blir benytta der det er usikker grunn for etablering av bygg.
                </Typography>
            </Container>
        </div>
    );
}

export default About;