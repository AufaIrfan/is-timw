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

interface DropdownLinksProps {
  routes: IRoute[];
}

const DropdownLinks = ({ routes }: DropdownLinksProps) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeColor = useColorModeValue('gray.700', 'white');
  const inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
  const textColor = useColorModeValue('secondaryGray.500', 'white');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  const isActiveRoute = useCallback(
    (routeName: string) => pathname?.includes(routeName),
    [pathname]
  );

  return (
    <>
      {routes.map((route, index) => {
        const hasChildren = route.children && route.children.length > 0;

        if (
          route.layout === '/admin' ||
          route.layout === '/auth' ||
          route.layout === '/rtl' ||
          route.layout === '/admin/nft-marketplace' ||
          route.layout === '/admin/purchase'
        ) {
          return (
            <Box key={index} mb={2}>
              <Flex
                align="center"
                justify="space-between"
                px="3"
                py="2"
                cursor={hasChildren ? 'pointer' : 'default'}
                _hover={{ bg: 'gray.100' }}
                onClick={() => hasChildren && setOpenIndex(openIndex === index ? null : index)}
              >
                <Flex align="center" gap={2}>
                  {route.icon}
                  <Text fontWeight="medium" color={isActiveRoute(route.path) ? activeColor : textColor}>
                    {route.name}
                  </Text>
                </Flex>
                {hasChildren &&
                  (openIndex === index ? <ChevronDownIcon /> : <ChevronRightIcon />)}
              </Flex>

              {hasChildren && (
                <Collapse in={openIndex === index} animateOpacity>
                  <Box ps="6">
                    {route.children.map((child, idx) => (
                      <NextLink key={idx} href={`${child.layout}${child.path}`} passHref>
                        <Link
                          display="block"
                          py="1"
                          fontSize="sm"
                          color={isActiveRoute(child.path) ? brandColor : textColor}
                          _hover={{ textDecoration: 'underline' }}
                        >
                          {child.name}
                        </Link>
                      </NextLink>
                    ))}
                  </Box>
                </Collapse>
              )}

              {!hasChildren && (
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
        }

        return null;
      })}
    </>
  );
};

export default DropdownLinks;
