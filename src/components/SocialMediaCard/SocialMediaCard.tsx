import "./SocialMediaCard.scss";
import React from "react";
import arrowUP from "../../images/icon-up.svg";
import arrowDown from "../../images/icon-down.svg";

import instagramIcon from "../../images/icon-instagram.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import youtubeIcon from "../../images/icon-youtube.svg";

type Props = {
    followers: string;
    username: string;
    followerStats: number;
    positive: boolean;
    theme: SocialNetwork;
}

export type SocialNetwork = "Instagram" | "Facebook" | "Twitter" | "YouTube";

const SocialMediaCard = ({followers, username, followerStats, positive, theme}: Props): React.ReactElement => {

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

    return (
        <div className="card-container">
            <div className={`top-line ${theme.toLowerCase()}`}></div>
            <div className="card">
                <div className="logo">
                    <img src={renderSocialMediaIcon(theme)}/>
                    <span>@{username}</span>
                </div>
                <div className="followers">
                    <strong> {followers}</strong>
                    <div>
                        followers
                    </div>
                </div>
                <div className={`stats ${positive ? "positive" : "negative"}`}>
                    <img src={positive ? arrowUP : arrowDown}/> {followerStats} Today
                </div>
            </div>

        </div>
    )
}

export default SocialMediaCard;