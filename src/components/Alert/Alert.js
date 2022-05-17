import "./Alert.scss";
import AlertHtml from "./Alert.html?raw";
import { convertHtmlStringToDomElement } from "../../utils";

export const createAlert = ({ message } = {}) => {
  return convertHtmlStringToDomElement(AlertHtml);
};
