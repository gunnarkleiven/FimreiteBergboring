import ICategory from '../interfaces/Category';
import waterImage from "../assets/water.jpeg";
import piercingImage from "../assets/piercing.jpeg";
import energywellImage from "../assets/energywell.jpeg";
import fundamentImage from "../assets/fundament.jpeg";

const categories: ICategory[] = [
    {
        name: "water",
        image: waterImage,
        header: "Boring etter vatn:",
        text: "Boring etter vatn for vassforsyning til gardsbruk, bustadhus, hytter, bustadfelt osv.",
        path: "/water/",

    },
    {
        name: "piercing",
        image: piercingImage,
        header: "Gjennomboring:",
        text: "Gjennomboring av fjellknausar, kryssing av vegar, tomter og eksisterande bebyggelse.. Dette er eit rimleg og miljøvenleg alternativ til konvensjonelle grøfter.",
        path: "/piercing/",

    },
    {
        name: "energywells",
        image: energywellImage,
        header: "Energibrønnar:",
        text: "Boring av energibrønnar til varmepumper i bustadhus, dette er ei eingongsinvistering som gjer at du kan utnytte ein miljøvenleg og fornybar energiresurs.",
        path: "/energywells/",
    },
    {
        name: "fundament",
        image: fundamentImage,
        header: "Fundamentering:",
        text: "Fundamentering: Er ein teknikk som blir benytta der det er usikker grunn for etablering av bygg.",
        path: "/fundament/",
    }
];

export default categories;