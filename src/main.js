import { createButton } from './components/Button/Button';
import { createAccordion } from './components/Accordion/Accordion';
import { createAlert } from './components/Alert/Alert';
import { convertDomElementToHtmlString } from './utils';

const app = document.getElementById('app');

const template = document.createElement('template');

template.innerHTML = `
    <h2>Button</h2>
    <div>
        <h4>Small Button</h4>
        <div>${convertDomElementToHtmlString(createButton({size: 'small'}))}</div>
        <h4>Medium Button</h4>
        <div>${convertDomElementToHtmlString(createButton({size: 'medium'}))}</div>
        <h4>Large Button</h4>
        <div>${convertDomElementToHtmlString(createButton({size: 'large'}))}</div>
    </div>
    <h2>Accordion</h2>
    <div class="mb-4">${convertDomElementToHtmlString(createAccordion())}</div>
    <h2>Alert</h2>
    <div>${convertDomElementToHtmlString(createAlert())}</div>
`;

app.appendChild(template.content.cloneNode(true));