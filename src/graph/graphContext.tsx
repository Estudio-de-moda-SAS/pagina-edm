import * as React from "react";

import { GraphRest } from "./graphRest";
import { buildGraphDomainServices } from "./graphDomains";
import type { CoreServices,} from "./graphDomains";
const CoreGraphServicesContext = React.createContext<CoreServices | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

export const GraphServicesProvider: React.FC<ProviderProps> = ({ children, }) => {
  const { getToken } = useAuth();

  const graph = React.useMemo(() => new GraphRest(getToken), [getToken]);
  const domains = React.useMemo(() => buildGraphDomainServices(graph), [graph]);

  return (
      <CoreGraphServicesContext.Provider value={domains.core}>
        {children}
      </CoreGraphServicesContext.Provider>
  );
};

export function useCoreGraphServices(): CoreServices {
  const ctx = React.useContext(CoreGraphServicesContext);
  if (!ctx) throw new Error("useCoreGraphServices debe usarse dentro de <GraphServicesProvider>.");
  return ctx;
}


export type {CoreServices,} from "./graphDomains";

function useAuth(): { getToken: any; } {
  throw new Error("Function not implemented.");
}

