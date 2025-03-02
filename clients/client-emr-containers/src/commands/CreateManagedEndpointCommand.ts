import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { CreateManagedEndpointRequest, CreateManagedEndpointResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateManagedEndpointCommand,
  serializeAws_restJson1CreateManagedEndpointCommand,
} from "../protocols/Aws_restJson1";

export interface CreateManagedEndpointCommandInput extends CreateManagedEndpointRequest {}
export interface CreateManagedEndpointCommandOutput extends CreateManagedEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new CreateManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 */
export class CreateManagedEndpointCommand extends $Command<
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
  EMRContainersClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateManagedEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateManagedEndpointCommandInput, CreateManagedEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "CreateManagedEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateManagedEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateManagedEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateManagedEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateManagedEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateManagedEndpointCommandOutput> {
    return deserializeAws_restJson1CreateManagedEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
