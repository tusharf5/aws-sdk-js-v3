import { Paginator } from "@aws-sdk/types";

import {
  GetComplianceDetailsByResourceCommand,
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
} from "../commands/GetComplianceDetailsByResourceCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetComplianceDetailsByResourceCommandInput,
  ...args: any
): Promise<GetComplianceDetailsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetComplianceDetailsByResourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetComplianceDetailsByResourceCommandInput,
  ...args: any
): Promise<GetComplianceDetailsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.getComplianceDetailsByResource(input, ...args);
};
export async function* paginateGetComplianceDetailsByResource(
  config: ConfigServicePaginationConfiguration,
  input: GetComplianceDetailsByResourceCommandInput,
  ...additionalArguments: any
): Paginator<GetComplianceDetailsByResourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetComplianceDetailsByResourceCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
