'use client';

import {
    Box,
    Collapse,
    Flex,
    HStack,
    Icon,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IRoute } from 'types/navigation';
import NextLink from 'next/link';
import { useSidebarMenu } from 'hooks/useSidebarMenu';

interface SidebarMenuProps {
    routes: IRoute[];
}

const SidebarMenu = ({ routes }: SidebarMenuProps) => {
    const {
        routes: filteredRoutes,
        isActiveRoute,
        openIndex,
        toggleOpenIndex,
    } = useSidebarMenu(routes);

    const activeColor = useColorModeValue('gray.700', 'white');
    const activeIcon = useColorModeValue('brand.500', 'white');
    const inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
    const textColor = useColorModeValue('secondaryGray.500', 'white');
    const brandColor = useColorModeValue('brand.500', 'brand.400');

    return (
        <>
            {filteredRoutes.map((route, index) => {
                const hasChildren = route.children && route.children.length > 0;

                return (
                    <Box key={index} mb={2}>
                            {hasChildren ? (
                                <>
                                    <Flex
                                        align="center"
                                        justify="space-between"
                                        px="3"
                                        py="2"
                                        cursor="pointer"
                                        _hover={{ bg: 'gray.100' }}
                                        onClick={() => toggleOpenIndex(index)}
                                    >
                                        <Flex w="100%" alignItems="center" justifyContent="center">
                                            <Box
                                                color={
                                                    isActiveRoute(route.path.toLowerCase())
                                                        ? activeIcon
                                                        : textColor
                                                }
                                                me="18px"
                                            >
                                                {route.icon}
                                            </Box>
                                            <Text
                                                me="auto"
                                                color={
                                                    isActiveRoute(route.path.toLowerCase())
                                                        ? activeColor
                                                        : textColor
                                                }
                                                fontWeight={
                                                    isActiveRoute(route.path.toLowerCase())
                                                        ? 'bold'
                                                        : 'normal'
                                                }
                                            >
                                                {route.name}
                                            </Text>
                                        </Flex>
                                        <Icon as={openIndex === index ? ChevronDownIcon : ChevronRightIcon} />
                                    </Flex>

                                    <Collapse in={openIndex === index} animateOpacity>
                                        <Box ps="6">
                                            {route.children.map((child, idx) => (
                                                <NextLink key={idx} href={`${child.layout}${child.path}`} passHref>
                                                    <HStack
                                                        spacing={isActiveRoute(child.path) ? '22px' : '26px'}
                                                        py="5px"
                                                        ps="10px"
                                                    >
                                                        <Text
                                                            me="auto"
                                                            color={
                                                                isActiveRoute(child.path)
                                                                    ? activeColor
                                                                    : inactiveColor
                                                            }
                                                            fontWeight={
                                                                isActiveRoute(child.path) ? 'bold' : 'normal'
                                                            }
                                                        >
                                                            {child.name}
                                                        </Text>
                                                        {isActiveRoute(child.path) && (
                                                            <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                                                        )}
                                                    </HStack>
                                                </NextLink>
                                            ))}
                                        </Box>
                                    </Collapse>
                                </>
                            ) : (
                                <NextLink href={`${route.layout}${route.path}`} passHref>
                                    <Link _hover={{ textDecoration: 'none' }}>
                                        <HStack
                                            spacing={
                                                isActiveRoute(route.path.toLowerCase()) ? '22px' : '26px'
                                            }
                                            py="5px"
                                            ps="10px"
                                        >
                                            <Flex w="100%" alignItems="center" justifyContent="center">
                                                <Box
                                                    color={
                                                        isActiveRoute(route.path.toLowerCase())
                                                            ? activeIcon
                                                            : textColor
                                                    }
                                                    me="18px"
                                                >
                                                    {route.icon}
                                                </Box>
                                                <Text
                                                    me="auto"
                                                    color={
                                                        isActiveRoute(route.path.toLowerCase())
                                                            ? activeColor
                                                            : textColor
                                                    }
                                                    fontWeight={
                                                        isActiveRoute(route.path.toLowerCase())
                                                            ? 'bold'
                                                            : 'normal'
                                                    }
                                                >
                                                    {route.name}
                                                </Text>
                                            </Flex>
                                            <Box
                                                h="36px"
                                                w="4px"
                                                bg={
                                                    isActiveRoute(route.path.toLowerCase())
                                                        ? brandColor
                                                        : 'transparent'
                                                }
                                                borderRadius="5px"
                                            />
                                        </HStack>
                                    </Link>
                                </NextLink>
                            )}
                    </Box>
                );
            })}
        </>
    );
};

export default SidebarMenu;
