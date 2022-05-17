import AccordionHtml from "./Accordion.html?raw";
import { convertHtmlStringToDomElement } from "../../utils";

export const createAccordion = ({ label, align } = {}) => {
  return convertHtmlStringToDomElement(AccordionHtml);
};
