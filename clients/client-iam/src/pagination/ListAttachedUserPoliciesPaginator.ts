import { Paginator } from "@aws-sdk/types";

import {
  ListAttachedUserPoliciesCommand,
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "../commands/ListAttachedUserPoliciesCommand";
import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAttachedUserPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedUserPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListAttachedUserPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedUserPolicies(input, ...args);
};
export async function* paginateListAttachedUserPolicies(
  config: IAMPaginationConfiguration,
  input: ListAttachedUserPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedUserPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedUserPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
