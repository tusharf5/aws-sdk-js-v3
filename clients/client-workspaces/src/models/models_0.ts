import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * <p>The user is not authorized to access a resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum AccessPropertyValue {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export enum DedicatedTenancySupportResultEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DedicatedTenancyModificationStateEnum {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 */
export interface AccountModification {
  /**
   * <p>The state of the modification to the configuration of BYOL.</p>
   */
  ModificationState?: DedicatedTenancyModificationStateEnum | string;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   */
  ErrorMessage?: string;
}

export namespace AccountModification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountModification): any => ({
    ...obj,
  });
}

export enum Application {
  Microsoft_Office_2016 = "Microsoft_Office_2016",
  Microsoft_Office_2019 = "Microsoft_Office_2019",
}

export interface AssociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>The identifier of the directory to associate the connection alias with.</p>
   */
  ResourceId: string | undefined;
}

export namespace AssociateConnectionAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface AssociateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies. </p>
   */
  ConnectionIdentifier?: string;
}

export namespace AssociateConnectionAliasResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateConnectionAliasResult): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export class InvalidParameterValuesException extends __BaseException {
  readonly name: "InvalidParameterValuesException" = "InvalidParameterValuesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValuesException, __BaseException>) {
    super({
      name: "InvalidParameterValuesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValuesException.prototype);
  }
}

/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * <p>This operation is not supported.</p>
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
  }
}

/**
 * <p>The resource is associated with a directory.</p>
 */
export class ResourceAssociatedException extends __BaseException {
  readonly name: "ResourceAssociatedException" = "ResourceAssociatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAssociatedException, __BaseException>) {
    super({
      name: "ResourceAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAssociatedException.prototype);
  }
}

/**
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;

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
    this.ResourceId = opts.ResourceId;
  }
}

export interface AssociateIpGroupsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

export namespace AssociateIpGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateIpGroupsRequest): any => ({
    ...obj,
  });
}

export interface AssociateIpGroupsResult {}

export namespace AssociateIpGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateIpGroupsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
  }
}

export enum AssociationStatus {
  ASSOCIATED_WITH_OWNER_ACCOUNT = "ASSOCIATED_WITH_OWNER_ACCOUNT",
  ASSOCIATED_WITH_SHARED_ACCOUNT = "ASSOCIATED_WITH_SHARED_ACCOUNT",
  NOT_ASSOCIATED = "NOT_ASSOCIATED",
  PENDING_ASSOCIATION = "PENDING_ASSOCIATION",
  PENDING_DISASSOCIATION = "PENDING_DISASSOCIATION",
}

/**
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface IpRuleItem {
  /**
   * <p>The IP address range, in CIDR notation.</p>
   */
  ipRule?: string;

  /**
   * <p>The description.</p>
   */
  ruleDesc?: string;
}

export namespace IpRuleItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpRuleItem): any => ({
    ...obj,
  });
}

export interface AuthorizeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

export namespace AuthorizeIpRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeIpRulesRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeIpRulesResult {}

export namespace AuthorizeIpRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeIpRulesResult): any => ({
    ...obj,
  });
}

export enum Compute {
  GRAPHICS = "GRAPHICS",
  GRAPHICSPRO = "GRAPHICSPRO",
  PERFORMANCE = "PERFORMANCE",
  POWER = "POWER",
  POWERPRO = "POWERPRO",
  STANDARD = "STANDARD",
  VALUE = "VALUE",
}

/**
 * <p>Describes the compute type of the bundle.</p>
 */
export interface ComputeType {
  /**
   * <p>The compute type.</p>
   */
  Name?: Compute | string;
}

export namespace ComputeType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeType): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 */
export interface RootStorage {
  /**
   * <p>The size of the root volume.</p>
   */
  Capacity?: string;
}

export namespace RootStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RootStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user volume for a WorkSpace bundle.</p>
 */
export interface UserStorage {
  /**
   * <p>The size of the user volume.</p>
   */
  Capacity?: string;
}

export namespace UserStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by Amazon Web Services.</p>
   */
  Owner?: string;

  /**
   * <p>The description of the bundle.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the image that was used to create the bundle.</p>
   */
  ImageId?: string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The size of the user volume.</p>
   */
  UserStorage?: UserStorage;

  /**
   * <p>The compute type of the bundle. For more information, see
   *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The time when the bundle was created.</p>
   */
  CreationTime?: Date;
}

export namespace WorkspaceBundle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceBundle): any => ({
    ...obj,
  });
}

export enum ClientDeviceType {
  DEVICE_TYPE_ANDROID = "DeviceTypeAndroid",
  DEVICE_TYPE_IOS = "DeviceTypeIos",
  DEVICE_TYPE_LINUX = "DeviceTypeLinux",
  DEVICE_TYPE_OSX = "DeviceTypeOsx",
  DEVICE_TYPE_WEB = "DeviceTypeWeb",
  DEVICE_TYPE_WINDOWS = "DeviceTypeWindows",
}

export enum ReconnectEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface ClientProperties {
  /**
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
   *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
   *          credentials. </p>
   */
  ReconnectEnabled?: ReconnectEnum | string;
}

export namespace ClientProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface ClientPropertiesResult {
  /**
   * <p>The resource identifier, in the form of a directory ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: ClientProperties;
}

export namespace ClientPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientPropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Connect client add-in.</p>
 */
export interface ConnectClientAddIn {
  /**
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of the client add in.</p>
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the client add-in.</p>
   */
  URL?: string;
}

export namespace ConnectClientAddIn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectClientAddIn): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection alias association that is used for cross-Region redirection. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasAssociation {
  /**
   * <p>The association status of the connection alias.</p>
   */
  AssociationStatus?: AssociationStatus | string;

  /**
   * <p>The identifier of the Amazon Web Services account that associated the connection alias
   *          with a directory.</p>
   */
  AssociatedAccountId?: string;

  /**
   * <p>The identifier of the directory associated with a connection alias.</p>
   */
  ResourceId?: string;

  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies.</p>
   */
  ConnectionIdentifier?: string;
}

export namespace ConnectionAliasAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionAliasAssociation): any => ({
    ...obj,
  });
}

export enum ConnectionAliasState {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAlias {
  /**
   * <p>The connection string specified for the connection alias. The connection string must be
   *          in the form of a fully qualified domain name (FQDN), such as
   *          <code>www.example.com</code>.</p>
   */
  ConnectionString?: string;

  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * <p>The current state of the connection alias.</p>
   */
  State?: ConnectionAliasState | string;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the connection alias.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The association status of the connection alias.</p>
   */
  Associations?: ConnectionAliasAssociation[];
}

export namespace ConnectionAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionAlias): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the permissions for a connection alias. Connection aliases are used for
 *          cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasPermission {
  /**
   * <p>The identifier of the Amazon Web Services account that the connection alias is shared
   *          with.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * <p>Indicates whether the specified Amazon Web Services account is allowed to associate the
   *          connection alias with a directory.</p>
   */
  AllowAssociation: boolean | undefined;
}

export namespace ConnectionAliasPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionAliasPermission): any => ({
    ...obj,
  });
}

export enum ConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CopyWorkspaceImageRequest {
  /**
   * <p>The name of the image.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the source image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The identifier of the source Region.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The tags for the image.</p>
   */
  Tags?: Tag[];
}

export namespace CopyWorkspaceImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface CopyWorkspaceImageResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export namespace CopyWorkspaceImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyWorkspaceImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified resource is not available.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.ResourceId = opts.ResourceId;
  }
}

export interface CreateConnectClientAddInRequest {
  /**
   * <p>The directory identifier for which to configure the client add-in.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   */
  Name: string | undefined;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL: string | undefined;
}

export namespace CreateConnectClientAddInRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectClientAddInRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectClientAddInResult {
  /**
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;
}

export namespace CreateConnectClientAddInResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectClientAddInResult): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be created.</p>
 */
export class ResourceCreationFailedException extends __BaseException {
  readonly name: "ResourceCreationFailedException" = "ResourceCreationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceCreationFailedException, __BaseException>) {
    super({
      name: "ResourceCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceCreationFailedException.prototype);
  }
}

export interface CreateConnectionAliasRequest {
  /**
   * <p>A connection string in the form of a fully qualified domain name (FQDN), such as
   *             <code>www.example.com</code>.</p>
   *          <important>
   *             <p>After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different
   *             account, even if you delete all instances of it from the original account. The
   *             connection string is globally reserved for your account.</p>
   *          </important>
   */
  ConnectionString: string | undefined;

  /**
   * <p>The tags to associate with the connection alias.</p>
   */
  Tags?: Tag[];
}

export namespace CreateConnectionAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;
}

export namespace CreateConnectionAliasResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionAliasResult): any => ({
    ...obj,
  });
}

export interface CreateIpGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: IpRuleItem[];

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateIpGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateIpGroupResult {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateIpGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpGroupResult): any => ({
    ...obj,
  });
}

export interface CreateTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface CreateTagsResult {}

export namespace CreateTagsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsResult): any => ({
    ...obj,
  });
}

export interface CreateUpdatedWorkspaceImageRequest {
  /**
   * <p>The name of the new updated WorkSpace image.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of whether updates for the WorkSpace image are available.</p>
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the source WorkSpace image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The tags that you want to add to the new updated WorkSpace image.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the updated image, you must create
   *             an IAM policy that grants your IAM user permissions to use
   *                <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateUpdatedWorkspaceImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUpdatedWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface CreateUpdatedWorkspaceImageResult {
  /**
   * <p>The identifier of the new updated WorkSpace image.</p>
   */
  ImageId?: string;
}

export namespace CreateUpdatedWorkspaceImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUpdatedWorkspaceImageResult): any => ({
    ...obj,
  });
}

export interface CreateWorkspaceBundleRequest {
  /**
   * <p>The name of the bundle.</p>
   */
  BundleName: string | undefined;

  /**
   * <p>The description of the bundle.</p>
   */
  BundleDescription: string | undefined;

  /**
   * <p>The identifier of the image that is used to create the bundle.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Describes the compute type of the bundle.</p>
   */
  ComputeType: ComputeType | undefined;

  /**
   * <p>Describes the user volume for a WorkSpace bundle.</p>
   */
  UserStorage: UserStorage | undefined;

  /**
   * <p>Describes the root volume for a WorkSpace bundle.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The tags associated with the bundle.</p>
   *
   *          <note>
   *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
   *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateWorkspaceBundleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceBundleRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkspaceBundleResult {
  /**
   * <p>Describes a WorkSpace bundle.</p>
   */
  WorkspaceBundle?: WorkspaceBundle;
}

export namespace CreateWorkspaceBundleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceBundleResult): any => ({
    ...obj,
  });
}

export enum RunningMode {
  ALWAYS_ON = "ALWAYS_ON",
  AUTO_STOP = "AUTO_STOP",
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *             Mode</a>.</p>
   */
  RunningMode?: RunningMode | string;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in
   *          60-minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute | string;
}

export namespace WorkspaceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>The symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Tag[];
}

export namespace WorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

export namespace CreateWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: WorkspaceRequest;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;
}

export namespace FailedCreateWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedCreateWorkspaceRequest): any => ({
    ...obj,
  });
}

export enum ModificationResourceEnum {
  COMPUTE_TYPE = "COMPUTE_TYPE",
  ROOT_VOLUME = "ROOT_VOLUME",
  USER_VOLUME = "USER_VOLUME",
}

export enum ModificationStateEnum {
  UPDATE_INITIATED = "UPDATE_INITIATED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Describes a WorkSpace modification.</p>
 */
export interface ModificationState {
  /**
   * <p>The resource.</p>
   */
  Resource?: ModificationResourceEnum | string;

  /**
   * <p>The modification state.</p>
   */
  State?: ModificationStateEnum | string;
}

export namespace ModificationState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModificationState): any => ({
    ...obj,
  });
}

export enum WorkspaceState {
  ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  IMPAIRED = "IMPAIRED",
  MAINTENANCE = "MAINTENANCE",
  PENDING = "PENDING",
  REBOOTING = "REBOOTING",
  REBUILDING = "REBUILDING",
  RESTORING = "RESTORING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
  UNHEALTHY = "UNHEALTHY",
  UPDATING = "UPDATING",
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * <p>The operational state of the WorkSpace.</p>
   *          <note>
   *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only
   *             briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
   *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
   *                <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace
   *             has been successfully terminated.</p>
   *          </note>
   */
  State?: WorkspaceState | string;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name
   *          varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a
   *             WorkSpace</a>. </p>
   */
  ComputerName?: string;

  /**
   * <p>The symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: ModificationState[];
}

export namespace Workspace {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workspace): any => ({
    ...obj,
  });
}

export interface CreateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: FailedCreateWorkspaceRequest[];

  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   */
  PendingRequests?: Workspace[];
}

export namespace CreateWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspacesResult): any => ({
    ...obj,
  });
}

export enum DedicatedTenancySupportEnum {
  ENABLED = "ENABLED",
}

/**
 * <p>Returns default client branding attributes that were imported. These attributes display
 *          on the client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you don't include sensitive
 *             information.</p>
 *          </important>
 */
export interface DefaultClientBrandingAttributes {
  /**
   * <p>The logo URL. This is the link where users can download the logo image. The only
   *          supported image format is <code>.png</code>.</p>
   */
  LogoUrl?: string;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive.You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *             <code>en_US</code>. </p>
   */
  LoginMessage?: { [key: string]: string };
}

export namespace DefaultClientBrandingAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultClientBrandingAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The default client branding attributes to be imported. These attributes display on the
 *          client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you do not include
 *             sensitive information.</p>
 *          </important>
 */
export interface DefaultImportClientBrandingAttributes {
  /**
   * <p>The logo. This is the link where users can download the logo image. The only image
   *          format accepted is <code>.png</code>.</p>
   */
  Logo?: Uint8Array;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *             <code>en_US</code>. </p>
   */
  LoginMessage?: { [key: string]: string };
}

export namespace DefaultImportClientBrandingAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultImportClientBrandingAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in
   *          this directory by default. If enabled, the Elastic public IP address allows outbound
   *          internet access from your WorkSpaces when you’re using an internet gateway in the Amazon
   *          VPC in which your WorkSpaces are located. If you're using a Network Address Translation
   *          (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in
   *          public subnets and you manually assign them Elastic IP addresses, you should disable this
   *          setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces
   *          that you rebuild. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html"> Configure a VPC for
   *             Amazon WorkSpaces</a>.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of the default security group to apply to WorkSpaces when they are
   *          created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security
   *             Groups for Your WorkSpaces</a>.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   */
  EnableMaintenanceMode?: boolean;
}

export namespace DefaultWorkspaceCreationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultWorkspaceCreationProperties): any => ({
    ...obj,
  });
}

export interface DeleteClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to delete client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The device type for which you want to delete client branding.</p>
   */
  Platforms: (ClientDeviceType | string)[] | undefined;
}

export namespace DeleteClientBrandingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientBrandingRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientBrandingResult {}

export namespace DeleteClientBrandingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientBrandingResult): any => ({
    ...obj,
  });
}

export interface DeleteConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to delete.</p>
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;
}

export namespace DeleteConnectClientAddInRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectClientAddInRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectClientAddInResult {}

export namespace DeleteConnectClientAddInResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectClientAddInResult): any => ({
    ...obj,
  });
}

export interface DeleteConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to delete.</p>
   */
  AliasId: string | undefined;
}

export namespace DeleteConnectionAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionAliasResult {}

export namespace DeleteConnectionAliasResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionAliasResult): any => ({
    ...obj,
  });
}

export interface DeleteIpGroupRequest {
  /**
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

export namespace DeleteIpGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpGroupResult {}

export namespace DeleteIpGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpGroupResult): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteTagsResult {}

export namespace DeleteTagsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsResult): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceBundleRequest {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;
}

export namespace DeleteWorkspaceBundleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceBundleRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceBundleResult {}

export namespace DeleteWorkspaceBundleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceBundleResult): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceImageRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export namespace DeleteWorkspaceImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceImageResult {}

export namespace DeleteWorkspaceImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceImageResult): any => ({
    ...obj,
  });
}

export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you
   *          must remove them before you deregister the directory, or you will receive an
   *          OperationNotSupportedException error.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeregisterWorkspaceDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterWorkspaceDirectoryRequest): any => ({
    ...obj,
  });
}

export interface DeregisterWorkspaceDirectoryResult {}

export namespace DeregisterWorkspaceDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterWorkspaceDirectoryResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountRequest {}

export namespace DescribeAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountResult {
  /**
   * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

export namespace DescribeAccountResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountModificationsRequest {
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountModificationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountModificationsResult {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: AccountModification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountModificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to view client branding
   *          information.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeClientBrandingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientBrandingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The client branding attributes for iOS device types. These attributes are displayed on
 *          the iOS client login screen only.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosClientBrandingAttributes {
  /**
   * <p>The logo. This is the link where users can download the logo image. This is the
   *          standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal
   *          to one point.</p>
   */
  LogoUrl?: string;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x).</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2xUrl?: string;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x).</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3xUrl?: string;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *             <code>en_US</code>. </p>
   */
  LoginMessage?: { [key: string]: string };
}

export namespace IosClientBrandingAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IosClientBrandingAttributes): any => ({
    ...obj,
  });
}

export interface DescribeClientBrandingResult {
  /**
   * <p>The branding information for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

export namespace DescribeClientBrandingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientBrandingResult): any => ({
    ...obj,
  });
}

export interface DescribeClientPropertiesRequest {
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: string[] | undefined;
}

export namespace DescribeClientPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientPropertiesRequest): any => ({
    ...obj,
  });
}

export interface DescribeClientPropertiesResult {
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

export namespace DescribeClientPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientPropertiesResult): any => ({
    ...obj,
  });
}

export interface DescribeConnectClientAddInsRequest {
  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeConnectClientAddInsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectClientAddInsRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectClientAddInsResult {
  /**
   * <p>Information about client add-ins.</p>
   */
  AddIns?: ConnectClientAddIn[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeConnectClientAddInsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectClientAddInsResult): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasesRequest {
  /**
   * <p>The identifiers of the connection aliases to describe.</p>
   */
  AliasIds?: string[];

  /**
   * <p>The identifier of the directory associated with the connection alias.</p>
   */
  ResourceId?: string;

  /**
   * <p>The maximum number of connection aliases to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionAliasesRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasesResult {
  /**
   * <p>Information about the specified connection aliases.</p>
   */
  ConnectionAliases?: ConnectionAlias[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionAliasesResult): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeConnectionAliasPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionAliasPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasPermissionsResult {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * <p>The permissions associated with a connection alias.</p>
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasPermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectionAliasPermissionsResult): any => ({
    ...obj,
  });
}

export interface DescribeIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeIpGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IP access control group.</p>
 */
export interface WorkspacesIpGroup {
  /**
   * <p>The identifier of the group.</p>
   */
  groupId?: string;

  /**
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * <p>The description of the group.</p>
   */
  groupDesc?: string;

  /**
   * <p>The rules.</p>
   */
  userRules?: IpRuleItem[];
}

export namespace WorkspacesIpGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspacesIpGroup): any => ({
    ...obj,
  });
}

export interface DescribeIpGroupsResult {
  /**
   * <p>Information about the IP access control groups.</p>
   */
  Result?: WorkspacesIpGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeIpGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTagsResult {
  /**
   * <p>The tags.</p>
   */
  TagList?: Tag[];
}

export namespace DescribeTagsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTagsResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceBundlesRequest {
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>.
   *          To describe the bundles that belong to your account, don't specify a value.</p>
   */
  Owner?: string;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceBundlesRequest): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceBundlesResult {
  /**
   * <p>Information about the bundles.</p>
   */
  Bundles?: WorkspaceBundle[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return. This token is valid for one day and must be used within that time
   *          frame.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceBundlesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   */
  DirectoryIds?: string[];

  /**
   * <p>The maximum number of directories to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceDirectoriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceDirectoriesRequest): any => ({
    ...obj,
  });
}

export enum WorkspaceDirectoryType {
  AD_CONNECTOR = "AD_CONNECTOR",
  SIMPLE_AD = "SIMPLE_AD",
}

/**
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 */
export interface SelfservicePermissions {
  /**
   * <p>Specifies whether users can restart their WorkSpace.</p>
   */
  RestartWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   */
  IncreaseVolumeSize?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   */
  ChangeComputeType?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   */
  SwitchRunningMode?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   */
  RebuildWorkspace?: ReconnectEnum | string;
}

export namespace SelfservicePermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelfservicePermissions): any => ({
    ...obj,
  });
}

export enum WorkspaceDirectoryState {
  DEREGISTERED = "DEREGISTERED",
  DEREGISTERING = "DEREGISTERING",
  ERROR = "ERROR",
  REGISTERED = "REGISTERED",
  REGISTERING = "REGISTERING",
}

export enum Tenancy {
  DEDICATED = "DEDICATED",
  SHARED = "SHARED",
}

/**
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 */
export interface WorkspaceAccessProperties {
  /**
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces.</p>
   */
  DeviceTypeWindows?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces.</p>
   */
  DeviceTypeOsx?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   */
  DeviceTypeWeb?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   */
  DeviceTypeIos?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Android and Android-compatible Chrome OS devices to
   *          access their WorkSpaces.</p>
   */
  DeviceTypeAndroid?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   */
  DeviceTypeChromeOs?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   */
  DeviceTypeZeroClient?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
   */
  DeviceTypeLinux?: AccessPropertyValue | string;
}

export namespace WorkspaceAccessProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceAccessProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 */
export interface WorkspaceDirectory {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: string[];

  /**
   * <p>The user name for the service account.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   */
  IamRoleId?: string;

  /**
   * <p>The directory type.</p>
   */
  DirectoryType?: WorkspaceDirectoryType | string;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the
   *          directory metadata is cleaned up, so this state is rarely returned. To confirm that a
   *          directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the
   *          directory has been successfully deregistered.</p>
   */
  State?: WorkspaceDirectoryState | string;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: string[];

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   */
  SelfservicePermissions?: SelfservicePermissions;
}

export namespace WorkspaceDirectory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceDirectory): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>Information about the directories.</p>
   */
  Directories?: WorkspaceDirectory[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceDirectoriesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceDirectoriesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeWorkspaceImagePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon Web Services accounts that have been granted permission to use a
 *          shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 */
export interface ImagePermission {
  /**
   * <p>The identifier of the Amazon Web Services account that an image has been shared
   *          with.</p>
   */
  SharedAccountId?: string;
}

export namespace ImagePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImagePermission): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The identifiers of the Amazon Web Services accounts that the image has been shared
   *          with.</p>
   */
  ImagePermissions?: ImagePermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceImagePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagePermissionsResult): any => ({
    ...obj,
  });
}

export enum ImageType {
  OWNED = "OWNED",
  SHARED = "SHARED",
}

export interface DescribeWorkspaceImagesRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageIds?: string[];

  /**
   * <p>The type (owned or shared) of the image.</p>
   */
  ImageType?: ImageType | string;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeWorkspaceImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagesRequest): any => ({
    ...obj,
  });
}

export enum OperatingSystemType {
  LINUX = "LINUX",
  WINDOWS = "WINDOWS",
}

/**
 * <p>The operating system that the image is running.</p>
 */
export interface OperatingSystem {
  /**
   * <p>The operating system.</p>
   */
  Type?: OperatingSystemType | string;
}

export namespace OperatingSystem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperatingSystem): any => ({
    ...obj,
  });
}

export enum WorkspaceImageRequiredTenancy {
  DEDICATED = "DEDICATED",
  DEFAULT = "DEFAULT",
}

export enum WorkspaceImageState {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

/**
 * <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and
 *          other components required by Amazon WorkSpaces.</p>
 *          <note>
 *             <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p>
 *          </note>
 */
export interface UpdateResult {
  /**
   * <p>Indicates whether updated drivers or other components are available for the specified
   *          WorkSpace image.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>A description of whether updates for the WorkSpace image are pending or
   *          available.</p>
   */
  Description?: string;
}

export namespace UpdateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace image.</p>
 */
export interface WorkspaceImage {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The status of the image.</p>
   */
  State?: WorkspaceImageState | string;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | string;

  /**
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date
   *          of the image.</p>
   */
  Created?: Date;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The updates (if any) that are available for the specified image.</p>
   */
  Updates?: UpdateResult;
}

export namespace WorkspaceImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceImage): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: WorkspaceImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: string[];

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   */
  BundleId?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   */
  Workspaces?: Workspace[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspacesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   */
  WorkspaceIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesConnectionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspacesConnectionStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface WorkspaceConnectionStatus {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
   *          is stopped.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date;
}

export namespace WorkspaceConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceConnectionStatus): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesConnectionStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspacesConnectionStatusResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace DescribeWorkspaceSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceSnapshotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The time when the snapshot was created.</p>
   */
  SnapshotTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceSnapshotsResult {
  /**
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots
   *          include the user volume.</p>
   */
  RebuildSnapshots?: Snapshot[];

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   */
  RestoreSnapshots?: Snapshot[];
}

export namespace DescribeWorkspaceSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceSnapshotsResult): any => ({
    ...obj,
  });
}

export interface DisassociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to disassociate.</p>
   */
  AliasId: string | undefined;
}

export namespace DisassociateConnectionAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface DisassociateConnectionAliasResult {}

export namespace DisassociateConnectionAliasResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateConnectionAliasResult): any => ({
    ...obj,
  });
}

export interface DisassociateIpGroupsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

export namespace DisassociateIpGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateIpGroupsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateIpGroupsResult {}

export namespace DisassociateIpGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateIpGroupsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>),
 *          rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   */
  ErrorMessage?: string;
}

export namespace FailedWorkspaceChangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedWorkspaceChangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The client branding attributes to import for iOS device types. These attributes are
 *          displayed on the iOS client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosImportClientBrandingAttributes {
  /**
   * <p>The logo. This is the link where users can download the logo image. This is the
   *          standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal
   *          to one point.</p>
   */
  Logo?: Uint8Array;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x).</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2x?: Uint8Array;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x).</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3x?: Uint8Array;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *             <code>en_US</code>. </p>
   */
  LoginMessage?: { [key: string]: string };
}

export namespace IosImportClientBrandingAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IosImportClientBrandingAttributes): any => ({
    ...obj,
  });
}

export interface ImportClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to import client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The branding information to import for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for iOS devices.</p>
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for web access.</p>
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}

export namespace ImportClientBrandingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportClientBrandingRequest): any => ({
    ...obj,
  });
}

export interface ImportClientBrandingResult {
  /**
   * <p>The branding information configured for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information configured for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

export namespace ImportClientBrandingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportClientBrandingResult): any => ({
    ...obj,
  });
}

export enum WorkspaceImageIngestionProcess {
  BYOL_GRAPHICS = "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
  BYOL_REGULAR = "BYOL_REGULAR",
  BYOL_REGULAR_WSP = "BYOL_REGULAR_WSP",
}

export interface ImportWorkspaceImageRequest {
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * <p>The ingestion process to be used when importing the image, depending on which protocol
   *          you want to use for your BYOL Workspace image, either PCoIP or WorkSpaces Streaming
   *          Protocol (WSP). To use WSP, specify a value that ends in <code>_WSP</code>. To use PCoIP,
   *          specify a value that does not end in <code>_WSP</code>. </p>
   *          <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify
   *             <code>BYOL_REGULAR</code> or <code>BYOL_REGULAR_WSP</code>, depending on the
   *          protocol.</p>
   */
  IngestionProcess: WorkspaceImageIngestionProcess | string | undefined;

  /**
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10
   *          BYOL images. For more information about subscribing to Office for BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring
   *             Your Own Windows Desktop Licenses</a>.</p>
   *          <note>
   *             <p>Although this parameter is an array, only one item is allowed at this time.</p>
   *          </note>
   */
  Applications?: (Application | string)[];
}

export namespace ImportWorkspaceImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface ImportWorkspaceImageResult {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

export namespace ImportWorkspaceImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportWorkspaceImageResult): any => ({
    ...obj,
  });
}

export interface ListAvailableManagementCidrRangesRequest {
  /**
   * <p>The IP address range to search. Specify an IP address range that is compatible with your
   *          network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).</p>
   */
  ManagementCidrRangeConstraint: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAvailableManagementCidrRangesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagementCidrRangesRequest): any => ({
    ...obj,
  });
}

export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListAvailableManagementCidrRangesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagementCidrRangesResult): any => ({
    ...obj,
  });
}

export interface MigrateWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace to migrate from.</p>
   */
  SourceWorkspaceId: string | undefined;

  /**
   * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
   */
  BundleId: string | undefined;
}

export namespace MigrateWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MigrateWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface MigrateWorkspaceResult {
  /**
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   */
  SourceWorkspaceId?: string;

  /**
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not
   *          succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the
   *          original WorkSpace ID.</p>
   */
  TargetWorkspaceId?: string;
}

export namespace MigrateWorkspaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MigrateWorkspaceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

export interface ModifyAccountRequest {
  /**
   * <p>The status of BYOL.</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

export namespace ModifyAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAccountRequest): any => ({
    ...obj,
  });
}

export interface ModifyAccountResult {}

export namespace ModifyAccountResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAccountResult): any => ({
    ...obj,
  });
}

export interface ModifyClientPropertiesRequest {
  /**
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties: ClientProperties | undefined;
}

export namespace ModifyClientPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyClientPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyClientPropertiesResult {}

export namespace ModifyClientPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyClientPropertiesResult): any => ({
    ...obj,
  });
}

export interface ModifySelfservicePermissionsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The permissions to enable or disable self-service capabilities.</p>
   */
  SelfservicePermissions: SelfservicePermissions | undefined;
}

export namespace ModifySelfservicePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySelfservicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ModifySelfservicePermissionsResult {}

export namespace ModifySelfservicePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySelfservicePermissionsResult): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceAccessPropertiesRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The device types and operating systems to enable or disable for access.</p>
   */
  WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}

export namespace ModifyWorkspaceAccessPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceAccessPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceAccessPropertiesResult {}

export namespace ModifyWorkspaceAccessPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceAccessPropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
  /**
   * <p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p>
   *          <note>
   *             <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new
   *             WorkSpaces launched in the directory will not have WorkDocs enabled. However, WorkDocs
   *             remains enabled for any existing WorkSpaces, unless you either disable users' access to
   *             WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs, see
   *                <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the <i>Amazon WorkDocs Administration
   *                Guide</i>. To delete a WorkDocs site, see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the
   *                <i>Amazon WorkDocs Administration Guide</i>.</p>
   *             <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the
   *             existing WorkSpaces and any new WorkSpaces that are launched in the directory will have
   *             WorkDocs enabled.</p>
   *          </note>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The default organizational unit (OU) for your WorkSpaces directories. This string must
   *          be the full Lightweight Directory Access Protocol (LDAP) distinguished name for the target
   *          domain and OU. It must be in the form
   *                <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>,
   *          where <i>value</i> is any string of characters, and the number of domain
   *          components (DCs) is two or more. For example,
   *             <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>To avoid errors, certain characters in the distinguished name must be escaped.
   *                   For more information, see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names"> Distinguished Names</a> in the Microsoft documentation.</p>
   *                </li>
   *                <li>
   *                   <p>The API doesn't validate whether the OU exists.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of your custom security group.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   */
  EnableMaintenanceMode?: boolean;
}

export namespace WorkspaceCreationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceCreationProperties): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The default properties for creating WorkSpaces.</p>
   */
  WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;
}

export namespace ModifyWorkspaceCreationPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceCreationPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceCreationPropertiesResult {}

export namespace ModifyWorkspaceCreationPropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceCreationPropertiesResult): any => ({
    ...obj,
  });
}

export interface ModifyWorkspacePropertiesRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties: WorkspaceProperties | undefined;
}

export namespace ModifyWorkspacePropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspacePropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspacePropertiesResult {}

export namespace ModifyWorkspacePropertiesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspacePropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export class UnsupportedWorkspaceConfigurationException extends __BaseException {
  readonly name: "UnsupportedWorkspaceConfigurationException" = "UnsupportedWorkspaceConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedWorkspaceConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedWorkspaceConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedWorkspaceConfigurationException.prototype);
  }
}

export enum TargetWorkspaceState {
  ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
  AVAILABLE = "AVAILABLE",
}

export interface ModifyWorkspaceStateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The WorkSpace state.</p>
   */
  WorkspaceState: TargetWorkspaceState | string | undefined;
}

export namespace ModifyWorkspaceStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceStateRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceStateResult {}

export namespace ModifyWorkspaceStateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyWorkspaceStateResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RebootRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootRequest): any => ({
    ...obj,
  });
}

export interface RebootWorkspacesRequest {
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

export namespace RebootWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface RebootWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebootWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootWorkspacesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 */
export interface RebuildRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RebuildRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebuildRequest): any => ({
    ...obj,
  });
}

export interface RebuildWorkspacesRequest {
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

export namespace RebuildWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebuildWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface RebuildWorkspacesResult {
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebuildWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebuildWorkspacesResult): any => ({
    ...obj,
  });
}

export interface RegisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a
   *          status of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of
   *          directories that you can register with Amazon WorkSpaces, you will receive a
   *          ResourceLimitExceededException error. Deregister directories that you are not using for
   *          WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the
   *          subnets are in supported Availability Zones. The subnets must also be in separate
   *          Availability Zones. If these conditions are not met, you will receive an
   *          OperationNotSupportedException error.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this
   *          parameter and WorkDocs is not available in the Region, you will receive an
   *          OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try
   *          again.</p>
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for
   *          BYOL, you will receive an InvalidParameterValuesException error. For more information about
   *          BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Tag[];
}

export namespace RegisterWorkspaceDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterWorkspaceDirectoryRequest): any => ({
    ...obj,
  });
}

export interface RegisterWorkspaceDirectoryResult {}

export namespace RegisterWorkspaceDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterWorkspaceDirectoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
  readonly name: "UnsupportedNetworkConfigurationException" = "UnsupportedNetworkConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedNetworkConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedNetworkConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedNetworkConfigurationException.prototype);
  }
}

/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
  readonly name: "WorkspacesDefaultRoleNotFoundException" = "WorkspacesDefaultRoleNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkspacesDefaultRoleNotFoundException, __BaseException>) {
    super({
      name: "WorkspacesDefaultRoleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkspacesDefaultRoleNotFoundException.prototype);
  }
}

export interface RestoreWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RestoreWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface RestoreWorkspaceResult {}

export namespace RestoreWorkspaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreWorkspaceResult): any => ({
    ...obj,
  });
}

export interface RevokeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to remove from the group.</p>
   */
  UserRules: string[] | undefined;
}

export namespace RevokeIpRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeIpRulesRequest): any => ({
    ...obj,
  });
}

export interface RevokeIpRulesResult {}

export namespace RevokeIpRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeIpRulesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace StartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRequest): any => ({
    ...obj,
  });
}

export interface StartWorkspacesRequest {
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

export namespace StartWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface StartWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StartWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkspacesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 */
export interface StopRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace StopRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopRequest): any => ({
    ...obj,
  });
}

export interface StopWorkspacesRequest {
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

export namespace StopWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface StopWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StopWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkspacesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 */
export interface TerminateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace TerminateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateRequest): any => ({
    ...obj,
  });
}

export interface TerminateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

export namespace TerminateWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface TerminateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace TerminateWorkspacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateWorkspacesResult): any => ({
    ...obj,
  });
}

export interface UpdateConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to update.</p>
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL?: string;
}

export namespace UpdateConnectClientAddInRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectClientAddInRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectClientAddInResult {}

export namespace UpdateConnectClientAddInResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectClientAddInResult): any => ({
    ...obj,
  });
}

export interface UpdateConnectionAliasPermissionRequest {
  /**
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.</p>
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

export namespace UpdateConnectionAliasPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionAliasPermissionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionAliasPermissionResult {}

export namespace UpdateConnectionAliasPermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionAliasPermissionResult): any => ({
    ...obj,
  });
}

export interface UpdateRulesOfIpGroupRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>One or more rules.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

export namespace UpdateRulesOfIpGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRulesOfIpGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateRulesOfIpGroupResult {}

export namespace UpdateRulesOfIpGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRulesOfIpGroupResult): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceBundleRequest {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export namespace UpdateWorkspaceBundleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceBundleRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceBundleResult {}

export namespace UpdateWorkspaceBundleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceBundleResult): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The permission to copy the image. This permission can be revoked only after an image has
   *          been shared.</p>
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account to share or unshare the image
   *          with.</p>
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p>
   *          </important>
   */
  SharedAccountId: string | undefined;
}

export namespace UpdateWorkspaceImagePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceImagePermissionRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceImagePermissionResult {}

export namespace UpdateWorkspaceImagePermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceImagePermissionResult): any => ({
    ...obj,
  });
}
