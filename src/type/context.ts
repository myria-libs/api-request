import { Logger } from "@nestjs/common";

export interface RequestContext {
    correlationId: string;
    logger: Logger;
}
