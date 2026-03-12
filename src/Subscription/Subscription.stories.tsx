// Make sure these paths point to your actual .tsx component files
import Button from '../components/button/Button';
import Input from '../components/input/Input';

export default {
    title: 'form/subscription',
    component: Input,
    subcomponents: { Button },
};

export const Email_Input_Submit_Button = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Input placeholder="Email" type="email" />
            <Button variant="primary">Submit</Button>
        </div>
    ),
};