import {EButtonStyle} from "./enums";

export const getIconColor = (style: Omit<EButtonStyle, 'loading'>): string => {
  switch (style) {
    case EButtonStyle.primary:
    case EButtonStyle.muted:
      return '#ffffff';
    case EButtonStyle.secondary:
      return '#5F6A82';
    case EButtonStyle.text:
      return '#2B78EE';
    default:
      return '#ffffff';
  }
}
