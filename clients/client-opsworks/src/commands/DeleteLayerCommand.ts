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

import { DeleteLayerRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  deserializeAws_json1_1DeleteLayerCommand,
  serializeAws_json1_1DeleteLayerCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteLayerCommandInput extends DeleteLayerRequest {}
export interface DeleteLayerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specified layer. You must first stop and then delete all associated instances or
 *       unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to
 *         Delete a Layer</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeleteLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeleteLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DeleteLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLayerCommandInput} for command's `input` shape.
 * @see {@link DeleteLayerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 */
export class DeleteLayerCommand extends $Command<
  DeleteLayerCommandInput,
  DeleteLayerCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLayerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLayerCommandInput, DeleteLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DeleteLayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLayerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLayerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLayerCommandOutput> {
    return deserializeAws_json1_1DeleteLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
