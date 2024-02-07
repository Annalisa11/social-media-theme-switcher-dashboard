import "./SocialMediaOverview.scss";
import {SocialNetwork} from "../SocialMediaCard/SocialMediaCard";

import React from "react";
import renderSocialMediaIcon from "../../utils/svg";
import DataCourse from "../DataCourse";


type Props = {
    dataNumber: string;
    theme: SocialNetwork;
    dataType: string;
    positive: boolean;
    stats: number;
}
const SocialMediaOverview = ({dataNumber, theme, dataType, positive, stats}: Props): React.ReactElement => {
    return (
        <div className="social-media-overview">
            <div className="first-row">
                <div className="data-type">{dataType}</div>
                <img src={renderSocialMediaIcon(theme)} alt={"icon"} />
            </div>
            <div className="second-row">
                <div className="data">{dataNumber}</div>
                <DataCourse data={stats} positive={positive} showDay={false} />
            </div>
        </div>
    )
}

export default SocialMediaOverview;