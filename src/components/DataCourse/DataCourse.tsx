import "./DataCourse.scss";
import arrowUP from "../../images/icon-up.svg";
import arrowDown from "../../images/icon-down.svg";
import React from "react";


type Props = {
    positive: boolean;
    data: number;
    showDay: boolean;
}

const DataCourse = ({positive, data, showDay}: Props): React.ReactElement => {
    return (
        <div className={`stats ${positive ? "positive" : "negative"}`}>
            <img src={positive ? arrowUP : arrowDown}/> {`${data} ${showDay ? "Today" : "%"}`}
        </div>
    )
}

export default DataCourse;