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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetTelemetryMetadataCommand,
  serializeAws_json1_1GetTelemetryMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetTelemetryMetadataCommandInput extends GetTelemetryMetadataRequest {}
export interface GetTelemetryMetadataCommandOutput extends GetTelemetryMetadataResponse, __MetadataBearer {}

/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class GetTelemetryMetadataCommand extends $Command<
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTelemetryMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetTelemetryMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTelemetryMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTelemetryMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTelemetryMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTelemetryMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTelemetryMetadataCommandOutput> {
    return deserializeAws_json1_1GetTelemetryMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
