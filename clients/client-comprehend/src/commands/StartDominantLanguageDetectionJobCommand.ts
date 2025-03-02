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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  StartDominantLanguageDetectionJobRequest,
  StartDominantLanguageDetectionJobResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartDominantLanguageDetectionJobCommand,
  serializeAws_json1_1StartDominantLanguageDetectionJobCommand,
} from "../protocols/Aws_json1_1";

export interface StartDominantLanguageDetectionJobCommandInput extends StartDominantLanguageDetectionJobRequest {}
export interface StartDominantLanguageDetectionJobCommandOutput
  extends StartDominantLanguageDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous dominant language detection job for a collection of documents. Use
 *       the  operation to track the status
 *       of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartDominantLanguageDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartDominantLanguageDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartDominantLanguageDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDominantLanguageDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartDominantLanguageDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StartDominantLanguageDetectionJobCommand extends $Command<
  StartDominantLanguageDetectionJobCommandInput,
  StartDominantLanguageDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDominantLanguageDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDominantLanguageDetectionJobCommandInput, StartDominantLanguageDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartDominantLanguageDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDominantLanguageDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDominantLanguageDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDominantLanguageDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDominantLanguageDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDominantLanguageDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartDominantLanguageDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
