import { Button } from '@chakra-ui/react';


export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button variant="solid" backgroundColor="green"> Success </Button>
export const Danger = () => <Button variant="solid" backgroundColor="red"> Danger </Button>
export const Warning = () => <Button variant="solid" backgroundColor="yellow" color="black"> Warning </Button>
export const Info = () => <Button variant="solid" backgroundColor="blue"> Info </Button>