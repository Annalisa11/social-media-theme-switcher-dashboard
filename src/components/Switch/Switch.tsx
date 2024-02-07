import React, {useState} from "react";
import "./Switch.scss"

type Props = {
    onSwitch: () => void;
    sliderOnRightside: boolean;
}

const Switch = ({onSwitch, sliderOnRightside}: Props): React.ReactElement => {
    const [checked, setChecked] = useState(sliderOnRightside);
    const onClick = () => {
        onSwitch();
        setChecked((prevState) => !prevState);
        console.log("switch", checked);
    }

    return (
        <label className="switch" >
            <input type="checkbox" checked={checked} onChange={onClick}/>
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;