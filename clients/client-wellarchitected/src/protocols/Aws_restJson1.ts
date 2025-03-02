import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "../commands/AssociateLensesCommand";
import { CreateLensShareCommandInput, CreateLensShareCommandOutput } from "../commands/CreateLensShareCommand";
import { CreateLensVersionCommandInput, CreateLensVersionCommandOutput } from "../commands/CreateLensVersionCommand";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "../commands/CreateMilestoneCommand";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "../commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "../commands/CreateWorkloadShareCommand";
import { DeleteLensCommandInput, DeleteLensCommandOutput } from "../commands/DeleteLensCommand";
import { DeleteLensShareCommandInput, DeleteLensShareCommandOutput } from "../commands/DeleteLensShareCommand";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "../commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "../commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "../commands/DisassociateLensesCommand";
import { ExportLensCommandInput, ExportLensCommandOutput } from "../commands/ExportLensCommand";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "../commands/GetAnswerCommand";
import { GetLensCommandInput, GetLensCommandOutput } from "../commands/GetLensCommand";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "../commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "../commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "../commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "../commands/GetMilestoneCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "../commands/GetWorkloadCommand";
import { ImportLensCommandInput, ImportLensCommandOutput } from "../commands/ImportLensCommand";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "../commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "../commands/ListLensReviewsCommand";
import { ListLensSharesCommandInput, ListLensSharesCommandOutput } from "../commands/ListLensSharesCommand";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "../commands/ListMilestonesCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "../commands/ListWorkloadSharesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "../commands/UpdateAnswerCommand";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "../commands/UpdateLensReviewCommand";
import {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "../commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "../commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "../commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "../commands/UpgradeLensReviewCommand";
import {
  AccessDeniedException,
  Answer,
  AnswerSummary,
  Choice,
  ChoiceAnswer,
  ChoiceAnswerSummary,
  ChoiceContent,
  ChoiceImprovementPlan,
  ChoiceUpdate,
  ConflictException,
  ImprovementSummary,
  InternalServerException,
  Lens,
  LensReview,
  LensReviewReport,
  LensReviewSummary,
  LensShareSummary,
  LensSummary,
  LensUpgradeSummary,
  Milestone,
  MilestoneSummary,
  NotificationSummary,
  PillarDifference,
  PillarReviewSummary,
  QuestionDifference,
  ResourceNotFoundException,
  Risk,
  ServiceQuotaExceededException,
  ShareInvitation,
  ShareInvitationSummary,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
  VersionDifferences,
  Workload,
  WorkloadShare,
  WorkloadShareSummary,
  WorkloadSummary,
} from "../models/models_0";
import { WellArchitectedServiceException as __BaseException } from "../models/WellArchitectedServiceException";

export const serializeAws_restJson1AssociateLensesCommand = async (
  input: AssociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/associateLenses";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LensAliases !== undefined &&
      input.LensAliases !== null && { LensAliases: serializeAws_restJson1LensAliases(input.LensAliases, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateLensShareCommand = async (
  input: CreateLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SharedWith !== undefined && input.SharedWith !== null && { SharedWith: input.SharedWith }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateLensVersionCommand = async (
  input: CreateLensVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/versions";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.IsMajorVersion !== undefined &&
      input.IsMajorVersion !== null && { IsMajorVersion: input.IsMajorVersion }),
    ...(input.LensVersion !== undefined && input.LensVersion !== null && { LensVersion: input.LensVersion }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMilestoneCommand = async (
  input: CreateMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/milestones";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.MilestoneName !== undefined && input.MilestoneName !== null && { MilestoneName: input.MilestoneName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateWorkloadCommand = async (
  input: CreateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1WorkloadAccountIds(input.AccountIds, context) }),
    ...(input.ArchitecturalDesign !== undefined &&
      input.ArchitecturalDesign !== null && { ArchitecturalDesign: input.ArchitecturalDesign }),
    ...(input.AwsRegions !== undefined &&
      input.AwsRegions !== null && { AwsRegions: serializeAws_restJson1WorkloadAwsRegions(input.AwsRegions, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Environment !== undefined && input.Environment !== null && { Environment: input.Environment }),
    ...(input.Industry !== undefined && input.Industry !== null && { Industry: input.Industry }),
    ...(input.IndustryType !== undefined && input.IndustryType !== null && { IndustryType: input.IndustryType }),
    ...(input.Lenses !== undefined &&
      input.Lenses !== null && { Lenses: serializeAws_restJson1WorkloadLenses(input.Lenses, context) }),
    ...(input.NonAwsRegions !== undefined &&
      input.NonAwsRegions !== null && {
        NonAwsRegions: serializeAws_restJson1WorkloadNonAwsRegions(input.NonAwsRegions, context),
      }),
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
    ...(input.PillarPriorities !== undefined &&
      input.PillarPriorities !== null && {
        PillarPriorities: serializeAws_restJson1WorkloadPillarPriorities(input.PillarPriorities, context),
      }),
    ...(input.ReviewOwner !== undefined && input.ReviewOwner !== null && { ReviewOwner: input.ReviewOwner }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.WorkloadName !== undefined && input.WorkloadName !== null && { WorkloadName: input.WorkloadName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateWorkloadShareCommand = async (
  input: CreateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.PermissionType !== undefined &&
      input.PermissionType !== null && { PermissionType: input.PermissionType }),
    ...(input.SharedWith !== undefined && input.SharedWith !== null && { SharedWith: input.SharedWith }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteLensCommand = async (
  input: DeleteLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.LensStatus !== undefined && { LensStatus: input.LensStatus }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteLensShareCommand = async (
  input: DeleteLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares/{ShareId}";
  if (input.ShareId !== undefined) {
    const labelValue: string = input.ShareId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ShareId.");
    }
    resolvedPath = resolvedPath.replace("{ShareId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ShareId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteWorkloadCommand = async (
  input: DeleteWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  const query: any = {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteWorkloadShareCommand = async (
  input: DeleteWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares/{ShareId}";
  if (input.ShareId !== undefined) {
    const labelValue: string = input.ShareId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ShareId.");
    }
    resolvedPath = resolvedPath.replace("{ShareId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ShareId.");
  }
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  const query: any = {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateLensesCommand = async (
  input: DisassociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/disassociateLenses";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LensAliases !== undefined &&
      input.LensAliases !== null && { LensAliases: serializeAws_restJson1LensAliases(input.LensAliases, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ExportLensCommand = async (
  input: ExportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/export";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.LensVersion !== undefined && { LensVersion: input.LensVersion }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetAnswerCommand = async (
  input: GetAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  if (input.QuestionId !== undefined) {
    const labelValue: string = input.QuestionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: QuestionId.");
    }
    resolvedPath = resolvedPath.replace("{QuestionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: QuestionId.");
  }
  const query: any = {
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLensCommand = async (
  input: GetLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.LensVersion !== undefined && { LensVersion: input.LensVersion }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLensReviewCommand = async (
  input: GetLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLensReviewReportCommand = async (
  input: GetLensReviewReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLensVersionDifferenceCommand = async (
  input: GetLensVersionDifferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/versionDifference";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.BaseLensVersion !== undefined && { BaseLensVersion: input.BaseLensVersion }),
    ...(input.TargetLensVersion !== undefined && { TargetLensVersion: input.TargetLensVersion }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetMilestoneCommand = async (
  input: GetMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/milestones/{MilestoneNumber}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.MilestoneNumber !== undefined) {
    const labelValue: string = input.MilestoneNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MilestoneNumber.");
    }
    resolvedPath = resolvedPath.replace("{MilestoneNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MilestoneNumber.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetWorkloadCommand = async (
  input: GetWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ImportLensCommand = async (
  input: ImportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/importLens";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.JSONString !== undefined && input.JSONString !== null && { JSONString: input.JSONString }),
    ...(input.LensAlias !== undefined && input.LensAlias !== null && { LensAlias: input.LensAlias }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAnswersCommand = async (
  input: ListAnswersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.PillarId !== undefined && { PillarId: input.PillarId }),
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLensesCommand = async (
  input: ListLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.LensType !== undefined && { LensType: input.LensType }),
    ...(input.LensStatus !== undefined && { LensStatus: input.LensStatus }),
    ...(input.LensName !== undefined && { LensName: input.LensName }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLensReviewImprovementsCommand = async (
  input: ListLensReviewImprovementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.PillarId !== undefined && { PillarId: input.PillarId }),
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLensReviewsCommand = async (
  input: ListLensReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/lensReviews";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  const query: any = {
    ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLensSharesCommand = async (
  input: ListLensSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares";
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  const query: any = {
    ...(input.SharedWithPrefix !== undefined && { SharedWithPrefix: input.SharedWithPrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMilestonesCommand = async (
  input: ListMilestonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/milestonesSummaries";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/notifications";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkloadId !== undefined && input.WorkloadId !== null && { WorkloadId: input.WorkloadId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListShareInvitationsCommand = async (
  input: ListShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/shareInvitations";
  const query: any = {
    ...(input.WorkloadNamePrefix !== undefined && { WorkloadNamePrefix: input.WorkloadNamePrefix }),
    ...(input.LensNamePrefix !== undefined && { LensNamePrefix: input.LensNamePrefix }),
    ...(input.ShareResourceType !== undefined && { ShareResourceType: input.ShareResourceType }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  if (input.WorkloadArn !== undefined) {
    const labelValue: string = input.WorkloadArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListWorkloadsCommand = async (
  input: ListWorkloadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloadsSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkloadNamePrefix !== undefined &&
      input.WorkloadNamePrefix !== null && { WorkloadNamePrefix: input.WorkloadNamePrefix }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListWorkloadSharesCommand = async (
  input: ListWorkloadSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  const query: any = {
    ...(input.SharedWithPrefix !== undefined && { SharedWithPrefix: input.SharedWithPrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  if (input.WorkloadArn !== undefined) {
    const labelValue: string = input.WorkloadArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  if (input.WorkloadArn !== undefined) {
    const labelValue: string = input.WorkloadArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAnswerCommand = async (
  input: UpdateAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  if (input.QuestionId !== undefined) {
    const labelValue: string = input.QuestionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: QuestionId.");
    }
    resolvedPath = resolvedPath.replace("{QuestionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: QuestionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ChoiceUpdates !== undefined &&
      input.ChoiceUpdates !== null && {
        ChoiceUpdates: serializeAws_restJson1ChoiceUpdates(input.ChoiceUpdates, context),
      }),
    ...(input.IsApplicable !== undefined && input.IsApplicable !== null && { IsApplicable: input.IsApplicable }),
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
    ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
    ...(input.SelectedChoices !== undefined &&
      input.SelectedChoices !== null && {
        SelectedChoices: serializeAws_restJson1SelectedChoices(input.SelectedChoices, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateLensReviewCommand = async (
  input: UpdateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LensNotes !== undefined && input.LensNotes !== null && { LensNotes: input.LensNotes }),
    ...(input.PillarNotes !== undefined &&
      input.PillarNotes !== null && { PillarNotes: serializeAws_restJson1PillarNotes(input.PillarNotes, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateShareInvitationCommand = async (
  input: UpdateShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/shareInvitations/{ShareInvitationId}";
  if (input.ShareInvitationId !== undefined) {
    const labelValue: string = input.ShareInvitationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ShareInvitationId.");
    }
    resolvedPath = resolvedPath.replace("{ShareInvitationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ShareInvitationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ShareInvitationAction !== undefined &&
      input.ShareInvitationAction !== null && { ShareInvitationAction: input.ShareInvitationAction }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateWorkloadCommand = async (
  input: UpdateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds !== undefined &&
      input.AccountIds !== null && { AccountIds: serializeAws_restJson1WorkloadAccountIds(input.AccountIds, context) }),
    ...(input.ArchitecturalDesign !== undefined &&
      input.ArchitecturalDesign !== null && { ArchitecturalDesign: input.ArchitecturalDesign }),
    ...(input.AwsRegions !== undefined &&
      input.AwsRegions !== null && { AwsRegions: serializeAws_restJson1WorkloadAwsRegions(input.AwsRegions, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Environment !== undefined && input.Environment !== null && { Environment: input.Environment }),
    ...(input.ImprovementStatus !== undefined &&
      input.ImprovementStatus !== null && { ImprovementStatus: input.ImprovementStatus }),
    ...(input.Industry !== undefined && input.Industry !== null && { Industry: input.Industry }),
    ...(input.IndustryType !== undefined && input.IndustryType !== null && { IndustryType: input.IndustryType }),
    ...(input.IsReviewOwnerUpdateAcknowledged !== undefined &&
      input.IsReviewOwnerUpdateAcknowledged !== null && {
        IsReviewOwnerUpdateAcknowledged: input.IsReviewOwnerUpdateAcknowledged,
      }),
    ...(input.NonAwsRegions !== undefined &&
      input.NonAwsRegions !== null && {
        NonAwsRegions: serializeAws_restJson1WorkloadNonAwsRegions(input.NonAwsRegions, context),
      }),
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
    ...(input.PillarPriorities !== undefined &&
      input.PillarPriorities !== null && {
        PillarPriorities: serializeAws_restJson1WorkloadPillarPriorities(input.PillarPriorities, context),
      }),
    ...(input.ReviewOwner !== undefined && input.ReviewOwner !== null && { ReviewOwner: input.ReviewOwner }),
    ...(input.WorkloadName !== undefined && input.WorkloadName !== null && { WorkloadName: input.WorkloadName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateWorkloadShareCommand = async (
  input: UpdateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares/{ShareId}";
  if (input.ShareId !== undefined) {
    const labelValue: string = input.ShareId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ShareId.");
    }
    resolvedPath = resolvedPath.replace("{ShareId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ShareId.");
  }
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.PermissionType !== undefined &&
      input.PermissionType !== null && { PermissionType: input.PermissionType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpgradeLensReviewCommand = async (
  input: UpgradeLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade";
  if (input.WorkloadId !== undefined) {
    const labelValue: string = input.WorkloadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WorkloadId.");
    }
    resolvedPath = resolvedPath.replace("{WorkloadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WorkloadId.");
  }
  if (input.LensAlias !== undefined) {
    const labelValue: string = input.LensAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LensAlias.");
    }
    resolvedPath = resolvedPath.replace("{LensAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LensAlias.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ClientRequestToken !== undefined &&
      input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.MilestoneName !== undefined && input.MilestoneName !== null && { MilestoneName: input.MilestoneName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AssociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLensesCommandError(output, context);
  }
  const contents: AssociateLensesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLensShareCommandError(output, context);
  }
  const contents: CreateLensShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ShareId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareId !== undefined && data.ShareId !== null) {
    contents.ShareId = __expectString(data.ShareId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLensShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateLensVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLensVersionCommandError(output, context);
  }
  const contents: CreateLensVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensArn: undefined,
    LensVersion: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.LensVersion !== undefined && data.LensVersion !== null) {
    contents.LensVersion = __expectString(data.LensVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLensVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMilestoneCommandError(output, context);
  }
  const contents: CreateMilestoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    MilestoneNumber: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMilestoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMilestoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkloadCommandError(output, context);
  }
  const contents: CreateWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    WorkloadArn: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.WorkloadArn !== undefined && data.WorkloadArn !== null) {
    contents.WorkloadArn = __expectString(data.WorkloadArn);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkloadShareCommandError(output, context);
  }
  const contents: CreateWorkloadShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ShareId: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareId !== undefined && data.ShareId !== null) {
    contents.ShareId = __expectString(data.ShareId);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLensCommandError(output, context);
  }
  const contents: DeleteLensCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLensShareCommandError(output, context);
  }
  const contents: DeleteLensShareCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLensShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkloadCommandError(output, context);
  }
  const contents: DeleteWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkloadShareCommandError(output, context);
  }
  const contents: DeleteWorkloadShareCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLensesCommandError(output, context);
  }
  const contents: DisassociateLensesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportLensCommandError(output, context);
  }
  const contents: ExportLensCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensJSON: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensJSON !== undefined && data.LensJSON !== null) {
    contents.LensJSON = __expectString(data.LensJSON);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAnswerCommandError(output, context);
  }
  const contents: GetAnswerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Answer: undefined,
    LensAlias: undefined,
    LensArn: undefined,
    MilestoneNumber: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Answer !== undefined && data.Answer !== null) {
    contents.Answer = deserializeAws_restJson1Answer(data.Answer, context);
  }
  if (data.LensAlias !== undefined && data.LensAlias !== null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLensCommandError(output, context);
  }
  const contents: GetLensCommandOutput = {
    $metadata: deserializeMetadata(output),
    Lens: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Lens !== undefined && data.Lens !== null) {
    contents.Lens = deserializeAws_restJson1Lens(data.Lens, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLensReviewCommandError(output, context);
  }
  const contents: GetLensReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensReview: undefined,
    MilestoneNumber: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReview !== undefined && data.LensReview !== null) {
    contents.LensReview = deserializeAws_restJson1LensReview(data.LensReview, context);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLensReviewReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLensReviewReportCommandError(output, context);
  }
  const contents: GetLensReviewReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensReviewReport: undefined,
    MilestoneNumber: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReviewReport !== undefined && data.LensReviewReport !== null) {
    contents.LensReviewReport = deserializeAws_restJson1LensReviewReport(data.LensReviewReport, context);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLensReviewReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLensVersionDifferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensVersionDifferenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLensVersionDifferenceCommandError(output, context);
  }
  const contents: GetLensVersionDifferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    BaseLensVersion: undefined,
    LatestLensVersion: undefined,
    LensAlias: undefined,
    LensArn: undefined,
    TargetLensVersion: undefined,
    VersionDifferences: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BaseLensVersion !== undefined && data.BaseLensVersion !== null) {
    contents.BaseLensVersion = __expectString(data.BaseLensVersion);
  }
  if (data.LatestLensVersion !== undefined && data.LatestLensVersion !== null) {
    contents.LatestLensVersion = __expectString(data.LatestLensVersion);
  }
  if (data.LensAlias !== undefined && data.LensAlias !== null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.TargetLensVersion !== undefined && data.TargetLensVersion !== null) {
    contents.TargetLensVersion = __expectString(data.TargetLensVersion);
  }
  if (data.VersionDifferences !== undefined && data.VersionDifferences !== null) {
    contents.VersionDifferences = deserializeAws_restJson1VersionDifferences(data.VersionDifferences, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLensVersionDifferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensVersionDifferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMilestoneCommandError(output, context);
  }
  const contents: GetMilestoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    Milestone: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Milestone !== undefined && data.Milestone !== null) {
    contents.Milestone = deserializeAws_restJson1Milestone(data.Milestone, context);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMilestoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMilestoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkloadCommandError(output, context);
  }
  const contents: GetWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    Workload: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Workload !== undefined && data.Workload !== null) {
    contents.Workload = deserializeAws_restJson1Workload(data.Workload, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ImportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportLensCommandError(output, context);
  }
  const contents: ImportLensCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensArn: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListAnswersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnswersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnswersCommandError(output, context);
  }
  const contents: ListAnswersCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnswerSummaries: undefined,
    LensAlias: undefined,
    LensArn: undefined,
    MilestoneNumber: undefined,
    NextToken: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnswerSummaries !== undefined && data.AnswerSummaries !== null) {
    contents.AnswerSummaries = deserializeAws_restJson1AnswerSummaries(data.AnswerSummaries, context);
  }
  if (data.LensAlias !== undefined && data.LensAlias !== null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnswersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnswersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLensesCommandError(output, context);
  }
  const contents: ListLensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensSummaries: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensSummaries !== undefined && data.LensSummaries !== null) {
    contents.LensSummaries = deserializeAws_restJson1LensSummaries(data.LensSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLensReviewImprovementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewImprovementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLensReviewImprovementsCommandError(output, context);
  }
  const contents: ListLensReviewImprovementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ImprovementSummaries: undefined,
    LensAlias: undefined,
    LensArn: undefined,
    MilestoneNumber: undefined,
    NextToken: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImprovementSummaries !== undefined && data.ImprovementSummaries !== null) {
    contents.ImprovementSummaries = deserializeAws_restJson1ImprovementSummaries(data.ImprovementSummaries, context);
  }
  if (data.LensAlias !== undefined && data.LensAlias !== null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLensReviewImprovementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewImprovementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLensReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLensReviewsCommandError(output, context);
  }
  const contents: ListLensReviewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensReviewSummaries: undefined,
    MilestoneNumber: undefined,
    NextToken: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReviewSummaries !== undefined && data.LensReviewSummaries !== null) {
    contents.LensReviewSummaries = deserializeAws_restJson1LensReviewSummaries(data.LensReviewSummaries, context);
  }
  if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLensReviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLensSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLensSharesCommandError(output, context);
  }
  const contents: ListLensSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensShareSummaries: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensShareSummaries !== undefined && data.LensShareSummaries !== null) {
    contents.LensShareSummaries = deserializeAws_restJson1LensShareSummaries(data.LensShareSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLensSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListMilestonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMilestonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMilestonesCommandError(output, context);
  }
  const contents: ListMilestonesCommandOutput = {
    $metadata: deserializeMetadata(output),
    MilestoneSummaries: undefined,
    NextToken: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MilestoneSummaries !== undefined && data.MilestoneSummaries !== null) {
    contents.MilestoneSummaries = deserializeAws_restJson1MilestoneSummaries(data.MilestoneSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMilestonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMilestonesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNotificationsCommandError(output, context);
  }
  const contents: ListNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    NotificationSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NotificationSummaries !== undefined && data.NotificationSummaries !== null) {
    contents.NotificationSummaries = deserializeAws_restJson1NotificationSummaries(data.NotificationSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShareInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListShareInvitationsCommandError(output, context);
  }
  const contents: ListShareInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ShareInvitationSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ShareInvitationSummaries !== undefined && data.ShareInvitationSummaries !== null) {
    contents.ShareInvitationSummaries = deserializeAws_restJson1ShareInvitationSummaries(
      data.ShareInvitationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListShareInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShareInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListWorkloadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkloadsCommandError(output, context);
  }
  const contents: ListWorkloadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    WorkloadSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadSummaries !== undefined && data.WorkloadSummaries !== null) {
    contents.WorkloadSummaries = deserializeAws_restJson1WorkloadSummaries(data.WorkloadSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorkloadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListWorkloadSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkloadSharesCommandError(output, context);
  }
  const contents: ListWorkloadSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    WorkloadId: undefined,
    WorkloadShareSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  if (data.WorkloadShareSummaries !== undefined && data.WorkloadShareSummaries !== null) {
    contents.WorkloadShareSummaries = deserializeAws_restJson1WorkloadShareSummaries(
      data.WorkloadShareSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorkloadSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnswerCommandError(output, context);
  }
  const contents: UpdateAnswerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Answer: undefined,
    LensAlias: undefined,
    LensArn: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Answer !== undefined && data.Answer !== null) {
    contents.Answer = deserializeAws_restJson1Answer(data.Answer, context);
  }
  if (data.LensAlias !== undefined && data.LensAlias !== null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn !== undefined && data.LensArn !== null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLensReviewCommandError(output, context);
  }
  const contents: UpdateLensReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    LensReview: undefined,
    WorkloadId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReview !== undefined && data.LensReview !== null) {
    contents.LensReview = deserializeAws_restJson1LensReview(data.LensReview, context);
  }
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateShareInvitationCommandError(output, context);
  }
  const contents: UpdateShareInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ShareInvitation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareInvitation !== undefined && data.ShareInvitation !== null) {
    contents.ShareInvitation = deserializeAws_restJson1ShareInvitation(data.ShareInvitation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkloadCommandError(output, context);
  }
  const contents: UpdateWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    Workload: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Workload !== undefined && data.Workload !== null) {
    contents.Workload = deserializeAws_restJson1Workload(data.Workload, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkloadShareCommandError(output, context);
  }
  const contents: UpdateWorkloadShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    WorkloadId: undefined,
    WorkloadShare: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  if (data.WorkloadShare !== undefined && data.WorkloadShare !== null) {
    contents.WorkloadShare = deserializeAws_restJson1WorkloadShare(data.WorkloadShare, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpgradeLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradeLensReviewCommandError(output, context);
  }
  const contents: UpgradeLensReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpgradeLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ChoiceUpdate = (input: ChoiceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
    ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1ChoiceUpdates = (input: { [key: string]: ChoiceUpdate }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ChoiceUpdate(value, context),
    };
  }, {});
};

const serializeAws_restJson1LensAliases = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PillarNotes = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SelectedChoices = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1WorkloadAccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1WorkloadAwsRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1WorkloadLenses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1WorkloadNonAwsRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1WorkloadPillarPriorities = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Answer = (output: any, context: __SerdeContext): Answer => {
  return {
    ChoiceAnswers:
      output.ChoiceAnswers !== undefined && output.ChoiceAnswers !== null
        ? deserializeAws_restJson1ChoiceAnswers(output.ChoiceAnswers, context)
        : undefined,
    Choices:
      output.Choices !== undefined && output.Choices !== null
        ? deserializeAws_restJson1Choices(output.Choices, context)
        : undefined,
    HelpfulResourceDisplayText: __expectString(output.HelpfulResourceDisplayText),
    HelpfulResourceUrl: __expectString(output.HelpfulResourceUrl),
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
    IsApplicable: __expectBoolean(output.IsApplicable),
    Notes: __expectString(output.Notes),
    PillarId: __expectString(output.PillarId),
    QuestionDescription: __expectString(output.QuestionDescription),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Reason: __expectString(output.Reason),
    Risk: __expectString(output.Risk),
    SelectedChoices:
      output.SelectedChoices !== undefined && output.SelectedChoices !== null
        ? deserializeAws_restJson1SelectedChoices(output.SelectedChoices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnswerSummaries = (output: any, context: __SerdeContext): AnswerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnswerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnswerSummary = (output: any, context: __SerdeContext): AnswerSummary => {
  return {
    ChoiceAnswerSummaries:
      output.ChoiceAnswerSummaries !== undefined && output.ChoiceAnswerSummaries !== null
        ? deserializeAws_restJson1ChoiceAnswerSummaries(output.ChoiceAnswerSummaries, context)
        : undefined,
    Choices:
      output.Choices !== undefined && output.Choices !== null
        ? deserializeAws_restJson1Choices(output.Choices, context)
        : undefined,
    IsApplicable: __expectBoolean(output.IsApplicable),
    PillarId: __expectString(output.PillarId),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Reason: __expectString(output.Reason),
    Risk: __expectString(output.Risk),
    SelectedChoices:
      output.SelectedChoices !== undefined && output.SelectedChoices !== null
        ? deserializeAws_restJson1SelectedChoices(output.SelectedChoices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Choice = (output: any, context: __SerdeContext): Choice => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    Description: __expectString(output.Description),
    HelpfulResource:
      output.HelpfulResource !== undefined && output.HelpfulResource !== null
        ? deserializeAws_restJson1ChoiceContent(output.HelpfulResource, context)
        : undefined,
    ImprovementPlan:
      output.ImprovementPlan !== undefined && output.ImprovementPlan !== null
        ? deserializeAws_restJson1ChoiceContent(output.ImprovementPlan, context)
        : undefined,
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_restJson1ChoiceAnswer = (output: any, context: __SerdeContext): ChoiceAnswer => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    Notes: __expectString(output.Notes),
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ChoiceAnswers = (output: any, context: __SerdeContext): ChoiceAnswer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChoiceAnswer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChoiceAnswerSummaries = (output: any, context: __SerdeContext): ChoiceAnswerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChoiceAnswerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChoiceAnswerSummary = (output: any, context: __SerdeContext): ChoiceAnswerSummary => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ChoiceContent = (output: any, context: __SerdeContext): ChoiceContent => {
  return {
    DisplayText: __expectString(output.DisplayText),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1ChoiceImprovementPlan = (output: any, context: __SerdeContext): ChoiceImprovementPlan => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    DisplayText: __expectString(output.DisplayText),
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
  } as any;
};

const deserializeAws_restJson1ChoiceImprovementPlans = (
  output: any,
  context: __SerdeContext
): ChoiceImprovementPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChoiceImprovementPlan(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Choices = (output: any, context: __SerdeContext): Choice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Choice(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImprovementSummaries = (output: any, context: __SerdeContext): ImprovementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImprovementSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ImprovementSummary = (output: any, context: __SerdeContext): ImprovementSummary => {
  return {
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
    ImprovementPlans:
      output.ImprovementPlans !== undefined && output.ImprovementPlans !== null
        ? deserializeAws_restJson1ChoiceImprovementPlans(output.ImprovementPlans, context)
        : undefined,
    PillarId: __expectString(output.PillarId),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Risk: __expectString(output.Risk),
  } as any;
};

const deserializeAws_restJson1Lens = (output: any, context: __SerdeContext): Lens => {
  return {
    Description: __expectString(output.Description),
    LensArn: __expectString(output.LensArn),
    LensVersion: __expectString(output.LensVersion),
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ShareInvitationId: __expectString(output.ShareInvitationId),
  } as any;
};

const deserializeAws_restJson1LensReview = (output: any, context: __SerdeContext): LensReview => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensVersion: __expectString(output.LensVersion),
    NextToken: __expectString(output.NextToken),
    Notes: __expectString(output.Notes),
    PillarReviewSummaries:
      output.PillarReviewSummaries !== undefined && output.PillarReviewSummaries !== null
        ? deserializeAws_restJson1PillarReviewSummaries(output.PillarReviewSummaries, context)
        : undefined,
    RiskCounts:
      output.RiskCounts !== undefined && output.RiskCounts !== null
        ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1LensReviewReport = (output: any, context: __SerdeContext): LensReviewReport => {
  return {
    Base64String: __expectString(output.Base64String),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
  } as any;
};

const deserializeAws_restJson1LensReviewSummaries = (output: any, context: __SerdeContext): LensReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LensReviewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LensReviewSummary = (output: any, context: __SerdeContext): LensReviewSummary => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensVersion: __expectString(output.LensVersion),
    RiskCounts:
      output.RiskCounts !== undefined && output.RiskCounts !== null
        ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1LensShareSummaries = (output: any, context: __SerdeContext): LensShareSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LensShareSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LensShareSummary = (output: any, context: __SerdeContext): LensShareSummary => {
  return {
    ShareId: __expectString(output.ShareId),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1LensSummaries = (output: any, context: __SerdeContext): LensSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LensSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LensSummary = (output: any, context: __SerdeContext): LensSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensType: __expectString(output.LensType),
    LensVersion: __expectString(output.LensVersion),
    Owner: __expectString(output.Owner),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1LensUpgradeSummary = (output: any, context: __SerdeContext): LensUpgradeSummary => {
  return {
    CurrentLensVersion: __expectString(output.CurrentLensVersion),
    LatestLensVersion: __expectString(output.LatestLensVersion),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

const deserializeAws_restJson1Milestone = (output: any, context: __SerdeContext): Milestone => {
  return {
    MilestoneName: __expectString(output.MilestoneName),
    MilestoneNumber: __expectInt32(output.MilestoneNumber),
    RecordedAt:
      output.RecordedAt !== undefined && output.RecordedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RecordedAt)))
        : undefined,
    Workload:
      output.Workload !== undefined && output.Workload !== null
        ? deserializeAws_restJson1Workload(output.Workload, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MilestoneSummaries = (output: any, context: __SerdeContext): MilestoneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MilestoneSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MilestoneSummary = (output: any, context: __SerdeContext): MilestoneSummary => {
  return {
    MilestoneName: __expectString(output.MilestoneName),
    MilestoneNumber: __expectInt32(output.MilestoneNumber),
    RecordedAt:
      output.RecordedAt !== undefined && output.RecordedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RecordedAt)))
        : undefined,
    WorkloadSummary:
      output.WorkloadSummary !== undefined && output.WorkloadSummary !== null
        ? deserializeAws_restJson1WorkloadSummary(output.WorkloadSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationSummaries = (output: any, context: __SerdeContext): NotificationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NotificationSummary = (output: any, context: __SerdeContext): NotificationSummary => {
  return {
    LensUpgradeSummary:
      output.LensUpgradeSummary !== undefined && output.LensUpgradeSummary !== null
        ? deserializeAws_restJson1LensUpgradeSummary(output.LensUpgradeSummary, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1PillarDifference = (output: any, context: __SerdeContext): PillarDifference => {
  return {
    DifferenceStatus: __expectString(output.DifferenceStatus),
    PillarId: __expectString(output.PillarId),
    PillarName: __expectString(output.PillarName),
    QuestionDifferences:
      output.QuestionDifferences !== undefined && output.QuestionDifferences !== null
        ? deserializeAws_restJson1QuestionDifferences(output.QuestionDifferences, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PillarDifferences = (output: any, context: __SerdeContext): PillarDifference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PillarDifference(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PillarReviewSummaries = (output: any, context: __SerdeContext): PillarReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PillarReviewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PillarReviewSummary = (output: any, context: __SerdeContext): PillarReviewSummary => {
  return {
    Notes: __expectString(output.Notes),
    PillarId: __expectString(output.PillarId),
    PillarName: __expectString(output.PillarName),
    RiskCounts:
      output.RiskCounts !== undefined && output.RiskCounts !== null
        ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QuestionDifference = (output: any, context: __SerdeContext): QuestionDifference => {
  return {
    DifferenceStatus: __expectString(output.DifferenceStatus),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
  } as any;
};

const deserializeAws_restJson1QuestionDifferences = (output: any, context: __SerdeContext): QuestionDifference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QuestionDifference(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RiskCounts = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [Risk | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1SelectedChoices = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ShareInvitation = (output: any, context: __SerdeContext): ShareInvitation => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    ShareInvitationId: __expectString(output.ShareInvitationId),
    ShareResourceType: __expectString(output.ShareResourceType),
    WorkloadId: __expectString(output.WorkloadId),
  } as any;
};

const deserializeAws_restJson1ShareInvitationSummaries = (
  output: any,
  context: __SerdeContext
): ShareInvitationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ShareInvitationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ShareInvitationSummary = (
  output: any,
  context: __SerdeContext
): ShareInvitationSummary => {
  return {
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    PermissionType: __expectString(output.PermissionType),
    ShareInvitationId: __expectString(output.ShareInvitationId),
    ShareResourceType: __expectString(output.ShareResourceType),
    SharedBy: __expectString(output.SharedBy),
    SharedWith: __expectString(output.SharedWith),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VersionDifferences = (output: any, context: __SerdeContext): VersionDifferences => {
  return {
    PillarDifferences:
      output.PillarDifferences !== undefined && output.PillarDifferences !== null
        ? deserializeAws_restJson1PillarDifferences(output.PillarDifferences, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Workload = (output: any, context: __SerdeContext): Workload => {
  return {
    AccountIds:
      output.AccountIds !== undefined && output.AccountIds !== null
        ? deserializeAws_restJson1WorkloadAccountIds(output.AccountIds, context)
        : undefined,
    ArchitecturalDesign: __expectString(output.ArchitecturalDesign),
    AwsRegions:
      output.AwsRegions !== undefined && output.AwsRegions !== null
        ? deserializeAws_restJson1WorkloadAwsRegions(output.AwsRegions, context)
        : undefined,
    Description: __expectString(output.Description),
    Environment: __expectString(output.Environment),
    ImprovementStatus: __expectString(output.ImprovementStatus),
    Industry: __expectString(output.Industry),
    IndustryType: __expectString(output.IndustryType),
    IsReviewOwnerUpdateAcknowledged: __expectBoolean(output.IsReviewOwnerUpdateAcknowledged),
    Lenses:
      output.Lenses !== undefined && output.Lenses !== null
        ? deserializeAws_restJson1WorkloadLenses(output.Lenses, context)
        : undefined,
    NonAwsRegions:
      output.NonAwsRegions !== undefined && output.NonAwsRegions !== null
        ? deserializeAws_restJson1WorkloadNonAwsRegions(output.NonAwsRegions, context)
        : undefined,
    Notes: __expectString(output.Notes),
    Owner: __expectString(output.Owner),
    PillarPriorities:
      output.PillarPriorities !== undefined && output.PillarPriorities !== null
        ? deserializeAws_restJson1WorkloadPillarPriorities(output.PillarPriorities, context)
        : undefined,
    ReviewOwner: __expectString(output.ReviewOwner),
    ReviewRestrictionDate:
      output.ReviewRestrictionDate !== undefined && output.ReviewRestrictionDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReviewRestrictionDate)))
        : undefined,
    RiskCounts:
      output.RiskCounts !== undefined && output.RiskCounts !== null
        ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
        : undefined,
    ShareInvitationId: __expectString(output.ShareInvitationId),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
    WorkloadArn: __expectString(output.WorkloadArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

const deserializeAws_restJson1WorkloadAccountIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadAwsRegions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadLenses = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadNonAwsRegions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadPillarPriorities = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadShare = (output: any, context: __SerdeContext): WorkloadShare => {
  return {
    PermissionType: __expectString(output.PermissionType),
    ShareId: __expectString(output.ShareId),
    SharedBy: __expectString(output.SharedBy),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

const deserializeAws_restJson1WorkloadShareSummaries = (
  output: any,
  context: __SerdeContext
): WorkloadShareSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkloadShareSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadShareSummary = (output: any, context: __SerdeContext): WorkloadShareSummary => {
  return {
    PermissionType: __expectString(output.PermissionType),
    ShareId: __expectString(output.ShareId),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1WorkloadSummaries = (output: any, context: __SerdeContext): WorkloadSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkloadSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkloadSummary = (output: any, context: __SerdeContext): WorkloadSummary => {
  return {
    ImprovementStatus: __expectString(output.ImprovementStatus),
    Lenses:
      output.Lenses !== undefined && output.Lenses !== null
        ? deserializeAws_restJson1WorkloadLenses(output.Lenses, context)
        : undefined,
    Owner: __expectString(output.Owner),
    RiskCounts:
      output.RiskCounts !== undefined && output.RiskCounts !== null
        ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
    WorkloadArn: __expectString(output.WorkloadArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
