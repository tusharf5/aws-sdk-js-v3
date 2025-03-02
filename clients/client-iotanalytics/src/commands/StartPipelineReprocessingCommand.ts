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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { StartPipelineReprocessingRequest, StartPipelineReprocessingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartPipelineReprocessingCommand,
  serializeAws_restJson1StartPipelineReprocessingCommand,
} from "../protocols/Aws_restJson1";

export interface StartPipelineReprocessingCommandInput extends StartPipelineReprocessingRequest {}
export interface StartPipelineReprocessingCommandOutput extends StartPipelineReprocessingResponse, __MetadataBearer {}

/**
 * <p>Starts the reprocessing of raw message data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, StartPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, StartPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new StartPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link StartPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 */
export class StartPipelineReprocessingCommand extends $Command<
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartPipelineReprocessingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartPipelineReprocessingCommandInput, StartPipelineReprocessingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "StartPipelineReprocessingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPipelineReprocessingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartPipelineReprocessingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPipelineReprocessingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartPipelineReprocessingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartPipelineReprocessingCommandOutput> {
    return deserializeAws_restJson1StartPipelineReprocessingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
