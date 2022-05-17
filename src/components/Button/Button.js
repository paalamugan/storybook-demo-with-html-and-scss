
import { convertHtmlStringToDomElement } from '../../utils';
// import styles from './Button.scss';
import ButtonHtmlString from './Button.html?raw';

export const createButton = ({
  size = 'medium',
} = {}) => {
  const domElement = convertHtmlStringToDomElement(ButtonHtmlString);
  const buttons = domElement.querySelectorAll('button');
  buttons.forEach(button => {
    const sizeClass = size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '';
    button.className = `${button.className} ${sizeClass}`;
  })

  // const btn = document.createElement('button');
  // btn.type = 'button';
  // btn.innerText = label;
  // btn.addEventListener('click', onClick);

  // const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
  // btn.className = [styles['storybook-button'], styles[`storybook-button--${size}`], mode].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return domElement;
};
