import { IRoute } from 'types/navigation';

export const useFilteredRoutes = (routes: IRoute[]) => {
  return routes.filter(route => {
    const hasChildren = route.children && route.children.length > 0;
    // return hasChildren || route.showWithoutChildren;
  });
};
