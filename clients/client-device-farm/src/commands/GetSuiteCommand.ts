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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetSuiteRequest, GetSuiteResult } from "../models/models_0";
import { deserializeAws_json1_1GetSuiteCommand, serializeAws_json1_1GetSuiteCommand } from "../protocols/Aws_json1_1";

export interface GetSuiteCommandInput extends GetSuiteRequest {}
export interface GetSuiteCommandOutput extends GetSuiteResult, __MetadataBearer {}

/**
 * <p>Gets information about a suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetSuiteCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetSuiteCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetSuiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteCommandInput} for command's `input` shape.
 * @see {@link GetSuiteCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class GetSuiteCommand extends $Command<
  GetSuiteCommandInput,
  GetSuiteCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSuiteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSuiteCommandInput, GetSuiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetSuiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSuiteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSuiteResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSuiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSuiteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteCommandOutput> {
    return deserializeAws_json1_1GetSuiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
