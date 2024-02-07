import instagramIcon from "../images/icon-instagram.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import {SocialNetwork} from "../components/SocialMediaCard/SocialMediaCard";

const renderSocialMediaIcon = (iconTheme: SocialNetwork) => {
    switch (iconTheme) {
        case "Facebook":
            return facebookIcon;
        case "Instagram":
            return instagramIcon;
        case "Twitter":
            return twitterIcon;
        case "YouTube":
            return youtubeIcon;
    }
}

export default renderSocialMediaIcon;