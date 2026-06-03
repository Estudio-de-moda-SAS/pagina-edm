import { MailService } from "../services/mail.service";
import { GraphRest } from "./graphRest";


export type CoreServices = {
  graph: GraphRest;
  mail: MailService;
};

export type GraphDomainBundle = {
  core: CoreServices;
};

export function buildGraphDomainServices(graph: GraphRest): GraphDomainBundle {

  const core: CoreServices = {
    graph,
    mail: new MailService(graph),
  };


  return { core, };
}
