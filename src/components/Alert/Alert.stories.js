import { createAlert } from './Alert';

export default {
  title: 'Components/Alert',
  argTypes: {
    message: { control: 'text' },
  },
};

const Template = (args) => createAlert(args);

export const Alert = Template.bind({});
Alert.args = {};
