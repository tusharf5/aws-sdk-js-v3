import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "./commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "./commands/CreateAssistantCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "./commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "./commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "./commands/DeleteAssistantCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "./commands/DeleteContentCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "./commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "./commands/GetAssistantCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "./commands/GetContentSummaryCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "./commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "./commands/ListAssistantsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "./commands/ListContentsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "./commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "./commands/NotifyRecommendationsReceivedCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "./commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "./commands/SearchContentCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "./commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "./commands/StartContentUploadCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "./commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAssistantAssociationCommandInput
  | CreateAssistantCommandInput
  | CreateContentCommandInput
  | CreateKnowledgeBaseCommandInput
  | CreateSessionCommandInput
  | DeleteAssistantAssociationCommandInput
  | DeleteAssistantCommandInput
  | DeleteContentCommandInput
  | DeleteKnowledgeBaseCommandInput
  | GetAssistantAssociationCommandInput
  | GetAssistantCommandInput
  | GetContentCommandInput
  | GetContentSummaryCommandInput
  | GetKnowledgeBaseCommandInput
  | GetRecommendationsCommandInput
  | GetSessionCommandInput
  | ListAssistantAssociationsCommandInput
  | ListAssistantsCommandInput
  | ListContentsCommandInput
  | ListKnowledgeBasesCommandInput
  | ListTagsForResourceCommandInput
  | NotifyRecommendationsReceivedCommandInput
  | QueryAssistantCommandInput
  | RemoveKnowledgeBaseTemplateUriCommandInput
  | SearchContentCommandInput
  | SearchSessionsCommandInput
  | StartContentUploadCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateContentCommandInput
  | UpdateKnowledgeBaseTemplateUriCommandInput;

export type ServiceOutputTypes =
  | CreateAssistantAssociationCommandOutput
  | CreateAssistantCommandOutput
  | CreateContentCommandOutput
  | CreateKnowledgeBaseCommandOutput
  | CreateSessionCommandOutput
  | DeleteAssistantAssociationCommandOutput
  | DeleteAssistantCommandOutput
  | DeleteContentCommandOutput
  | DeleteKnowledgeBaseCommandOutput
  | GetAssistantAssociationCommandOutput
  | GetAssistantCommandOutput
  | GetContentCommandOutput
  | GetContentSummaryCommandOutput
  | GetKnowledgeBaseCommandOutput
  | GetRecommendationsCommandOutput
  | GetSessionCommandOutput
  | ListAssistantAssociationsCommandOutput
  | ListAssistantsCommandOutput
  | ListContentsCommandOutput
  | ListKnowledgeBasesCommandOutput
  | ListTagsForResourceCommandOutput
  | NotifyRecommendationsReceivedCommandOutput
  | QueryAssistantCommandOutput
  | RemoveKnowledgeBaseTemplateUriCommandOutput
  | SearchContentCommandOutput
  | SearchSessionsCommandOutput
  | StartContentUploadCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateContentCommandOutput
  | UpdateKnowledgeBaseTemplateUriCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type WisdomClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WisdomClient class constructor that set the region, credentials and other options.
 */
export interface WisdomClientConfig extends WisdomClientConfigType {}

type WisdomClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WisdomClient class. This is resolved and normalized from the {@link WisdomClientConfig | constructor configuration interface}.
 */
export interface WisdomClientResolvedConfig extends WisdomClientResolvedConfigType {}

/**
 * <p>All Amazon Connect Wisdom functionality is accessible using the API. For example, you can create an
 *       assistant and a knowledge base.</p>
 *
 *          <p>Some more advanced features are only accessible using the Wisdom API. For example, you
 *       can manually manage content by uploading custom files and control their lifecycle. </p>
 */
export class WisdomClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WisdomClientResolvedConfig
> {
  /**
   * The resolved configuration of WisdomClient class. This is resolved and normalized from the {@link WisdomClientConfig | constructor configuration interface}.
   */
  readonly config: WisdomClientResolvedConfig;

  constructor(configuration: WisdomClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
