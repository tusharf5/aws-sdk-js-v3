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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { UpdateServiceIntegrationRequest, UpdateServiceIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateServiceIntegrationCommand,
  serializeAws_restJson1UpdateServiceIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateServiceIntegrationCommandInput extends UpdateServiceIntegrationRequest {}
export interface UpdateServiceIntegrationCommandOutput extends UpdateServiceIntegrationResponse, __MetadataBearer {}

/**
 * <p> Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * 			one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create
 * 			an OpsItem for each generated insight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateServiceIntegrationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new UpdateServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class UpdateServiceIntegrationCommand extends $Command<
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceIntegrationCommandInput, UpdateServiceIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "UpdateServiceIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateServiceIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceIntegrationCommandOutput> {
    return deserializeAws_restJson1UpdateServiceIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
