import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import pkg from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `<span class="d-flex align-items-center justify-content-center" style="display: flex; align-items: center; color: #ae81ff; font-weight: 400; letter-spacing: 0.1rem;">
      <div>
        My Sample Demo<br />
        <small>${pkg.version}</small>
      </div>
    </span>`,
    brandUrl: 'https://github.com/paalamugan/storybook-demo-with-html-and-scss',
  })
});