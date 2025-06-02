import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IRoute } from 'types/navigation';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useFilteredRoutes } from 'hooks/useFilteredRoutes';

interface DropdownLinksProps {
  routes: IRoute[];
}

const DropdownLinks = ({ routes }: DropdownLinksProps) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filteredRoutes = useFilteredRoutes(routes);

  const activeColor = useColorModeValue('gray.700', 'white');
  const activeIcon = useColorModeValue('brand.500', 'white');
  const inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
  const textColor = useColorModeValue('secondaryGray.500', 'white');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  const isActiveRoute = useCallback(
    (routeName: string) => pathname?.includes(routeName),
    [pathname]
  );

  return (
    <>
      {filteredRoutes.map((route, index) => {
        const hasChildren = route.children && route.children.length > 0;

        // if (
        //   route.layout === '/admin' ||
        //   route.layout === '/auth' ||
        //   route.layout === '/rtl' ||
        //   route.layout === '/admin/nft-marketplace' ||
        //   route.layout === '/admin/purchase'
        // ) {
          return (
            <Box key={index} mb={2}>
              {hasChildren ? (
                <>
              <Flex
                align="center"
                justify="space-between"
                px="3"
                py="2"
                cursor={hasChildren ? 'pointer' : 'default'}
                _hover={{ bg: 'gray.100' }}
                onClick={() => hasChildren && setOpenIndex(openIndex === index ? null : index)}
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
                {hasChildren &&
                  (openIndex === index ? <ChevronDownIcon /> : <ChevronRightIcon />)}
              </Flex>

                <Collapse in={openIndex === index} animateOpacity>
                  <Box ps="6">
                    {route.children.map((child, idx) => (
                      <NextLink key={idx} href={`${child.layout}${child.path}`} passHref>
                        <HStack
                          spacing={isActiveRoute(child.path.toLowerCase()) ? '22px' : '26px'}
                          py="5px"
                          ps="10px"
                        >
                          <Text
                            me="auto"
                            color={
                              isActiveRoute(child.path.toLowerCase()) ? activeColor : inactiveColor
                            }
                            fontWeight={
                              isActiveRoute(child.path.toLowerCase()) ? 'bold' : 'normal'
                            }
                          >
                            {child.name}
                          </Text>
                          {isActiveRoute(child.path.toLowerCase()) && (
                            <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                          )}
                        </HStack>
                      </NextLink>
                    ))}
                  </Box>
                </Collapse>
              </>
              ) : (
                <NextLink href={route.layout + route.path} passHref>
                  <Link>
                    <HStack
                      spacing={isActiveRoute(route.path.toLowerCase()) ? '22px' : '26px'}
                      py="5px"
                      ps="10px"
                    >
                      <Text
                        me="auto"
                        color={
                          isActiveRoute(route.path.toLowerCase()) ? activeColor : inactiveColor
                        }
                        fontWeight={
                          isActiveRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                        }
                      >
                        {route.name}
                      </Text>
                      {isActiveRoute(route.path.toLowerCase()) && (
                        <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                      )}
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

export default DropdownLinks;
