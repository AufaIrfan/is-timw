import { useState, useCallback, useMemo } from 'react';
import { IRoute } from 'types/navigation';
import { usePathname } from 'next/navigation';

export const useSidebarMenu = (routes: IRoute[]) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isActiveRoute = useCallback(
    (routePath: string) => pathname?.toLowerCase().includes(routePath.toLowerCase()),
    [pathname]
  );

  const toggleOpenIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => route.name && route.path); // Show all valid routes
  }, [routes]);

  return {
    routes: filteredRoutes,
    isActiveRoute,
    openIndex,
    toggleOpenIndex,
  };
};
