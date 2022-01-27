import React from "react";
import PlusSVG from '../../../assets/plus.svg'
import {getIconColor} from "../functions";
import {EButtonStyle} from "../enums";

type TPlus = {
  style: EButtonStyle
}

const Plus = ({ style }: TPlus): JSX.Element => {
  return (
    <PlusSVG stroke={getIconColor(style)} strokeWidth={2} />
  )
}

export default Plus;
