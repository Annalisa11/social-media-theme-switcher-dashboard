import "./SocialMediaCard.scss";
import React from "react";
import arrowUP from "../../images/icon-up.svg";
import arrowDown from "../../images/icon-down.svg";
import renderSocialMediaIcon from "../../utils/svg";
import DataCourse from "../DataCourse";



type Props = {
    followers: string;
    username: string;
    followerStats: number;
    positive: boolean;
    theme: SocialNetwork;
}

export type SocialNetwork = "Instagram" | "Facebook" | "Twitter" | "YouTube";

const SocialMediaCard = ({followers, username, followerStats, positive, theme}: Props): React.ReactElement => {
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
                <DataCourse data={followerStats} positive={positive} showDay={true} />
            </div>

        </div>
    )
}

export default SocialMediaCard;