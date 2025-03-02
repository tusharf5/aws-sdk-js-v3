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

import { DescribeConstraintInput, DescribeConstraintOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConstraintCommand,
  serializeAws_json1_1DescribeConstraintCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DescribeConstraintCommandInput extends DescribeConstraintInput {}
export interface DescribeConstraintCommandOutput extends DescribeConstraintOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified constraint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConstraintCommandInput} for command's `input` shape.
 * @see {@link DescribeConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DescribeConstraintCommand extends $Command<
  DescribeConstraintCommandInput,
  DescribeConstraintCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConstraintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConstraintCommandInput, DescribeConstraintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeConstraintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConstraintInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConstraintOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConstraintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConstraintCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConstraintCommandOutput> {
    return deserializeAws_json1_1DescribeConstraintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
