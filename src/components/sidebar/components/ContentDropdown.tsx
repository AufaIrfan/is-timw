// chakra imports
import { 
    Box, 
    Flex, 
    Stack,
    Text, 
    useDisclosure,
    Link as ChakraLink,
 } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

// FUNCTIONS

interface SidebarDropdownContentProps {
	routes: IRoute[];
}

function SidebarDropdownContent(props: SidebarDropdownContentProps) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

			<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>
				<SidebarCard />
			</Box>
		</Flex>
	);
}

export default SidebarDropdownContent;
