import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { IoTDataPlaneServiceException as __BaseException } from "./IoTDataPlaneServiceException";

/**
 * <p>The specified version does not match the version of the document.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The input for the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;
}

export namespace DeleteThingShadowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

export namespace DeleteThingShadowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingShadowResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request is not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The document encoding is not supported.</p>
 */
export class UnsupportedDocumentEncodingException extends __BaseException {
  readonly name: "UnsupportedDocumentEncodingException" = "UnsupportedDocumentEncodingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDocumentEncodingException, __BaseException>) {
    super({
      name: "UnsupportedDocumentEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDocumentEncodingException.prototype);
  }
}

/**
 * <p>The input for the GetRetainedMessage operation.</p>
 */
export interface GetRetainedMessageRequest {
  /**
   * <p>The topic name of the retained message to retrieve.</p>
   */
  topic: string | undefined;
}

export namespace GetRetainedMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetainedMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetRetainedMessage operation.</p>
 */
export interface GetRetainedMessageResponse {
  /**
   * <p>The topic name to which the retained message was published.</p>
   */
  topic?: string;

  /**
   * <p>The Base64-encoded message payload of the retained message body.</p>
   */
  payload?: Uint8Array;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   */
  qos?: number;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   */
  lastModifiedTime?: number;
}

export namespace GetRetainedMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetainedMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetThingShadow operation.</p>
 */
export interface GetThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;
}

export namespace GetThingShadowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace GetThingShadowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetThingShadowResponse): any => ({
    ...obj,
  });
}

export interface ListNamedShadowsForThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListNamedShadowsForThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNamedShadowsForThingRequest): any => ({
    ...obj,
  });
}

export interface ListNamedShadowsForThingResponse {
  /**
   * <p>The list of shadows for the specified thing.</p>
   */
  results?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Epoch date and time the response was generated by IoT.</p>
   */
  timestamp?: number;
}

export namespace ListNamedShadowsForThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNamedShadowsForThingResponse): any => ({
    ...obj,
  });
}

export interface ListRetainedMessagesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *       value from a previous response; otherwise <b>null</b> to receive
   *       the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListRetainedMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRetainedMessagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a single retained message.</p>
 */
export interface RetainedMessageSummary {
  /**
   * <p>The topic name to which the retained message was published.</p>
   */
  topic?: string;

  /**
   * <p>The size of the retained message's payload in bytes.</p>
   */
  payloadSize?: number;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   */
  qos?: number;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   */
  lastModifiedTime?: number;
}

export namespace RetainedMessageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetainedMessageSummary): any => ({
    ...obj,
  });
}

export interface ListRetainedMessagesResponse {
  /**
   * <p>A summary list the account's retained messages. The information returned doesn't include
   *       the message payloads of the retained messages.</p>
   */
  retainedTopics?: RetainedMessageSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListRetainedMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRetainedMessagesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the Publish operation.</p>
 */
export interface PublishRequest {
  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level.</p>
   */
  qos?: number;

  /**
   * <p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p>
   *          <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   */
  retain?: boolean;

  /**
   * <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p>
   *          <p>Publishing an empty (null) payload with <b>retain</b> =
   *         <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p>
   */
  payload?: Uint8Array;
}

export namespace PublishRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export class RequestEntityTooLargeException extends __BaseException {
  readonly name: "RequestEntityTooLargeException" = "RequestEntityTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestEntityTooLargeException, __BaseException>) {
    super({
      name: "RequestEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestEntityTooLargeException.prototype);
  }
}

/**
 * <p>The input for the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;

  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

export namespace UpdateThingShadowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace UpdateThingShadowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingShadowResponse): any => ({
    ...obj,
  });
}
