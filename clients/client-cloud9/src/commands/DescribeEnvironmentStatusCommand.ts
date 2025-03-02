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

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentStatusCommand,
  serializeAws_json1_1DescribeEnvironmentStatusCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEnvironmentStatusCommandInput extends DescribeEnvironmentStatusRequest {}
export interface DescribeEnvironmentStatusCommandOutput extends DescribeEnvironmentStatusResult, __MetadataBearer {}

/**
 * <p>Gets status information for an Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentStatusCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentStatusCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentStatusCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 */
export class DescribeEnvironmentStatusCommand extends $Command<
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "DescribeEnvironmentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEnvironmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEnvironmentStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentStatusCommandOutput> {
    return deserializeAws_json1_1DescribeEnvironmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
