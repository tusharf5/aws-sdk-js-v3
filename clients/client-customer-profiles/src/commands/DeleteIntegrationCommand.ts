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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIntegrationCommand,
  serializeAws_restJson1DeleteIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteIntegrationCommandInput extends DeleteIntegrationRequest {}
export interface DeleteIntegrationCommandOutput extends DeleteIntegrationResponse, __MetadataBearer {}

/**
 * <p>Removes an integration from a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class DeleteIntegrationCommand extends $Command<
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "DeleteIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIntegrationCommandOutput> {
    return deserializeAws_restJson1DeleteIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
