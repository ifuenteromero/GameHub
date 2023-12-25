import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const isChecked = colorMode === 'dark';
    return (
        <HStack>
            <Switch
                colorScheme="green"
                isChecked={isChecked}
                onChange={toggleColorMode}
            />
            <Text>Dark Mode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;
