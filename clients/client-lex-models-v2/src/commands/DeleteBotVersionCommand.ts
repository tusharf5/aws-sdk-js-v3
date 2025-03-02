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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotVersionRequest, DeleteBotVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBotVersionCommand,
  serializeAws_restJson1DeleteBotVersionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteBotVersionCommandInput extends DeleteBotVersionRequest {}
export interface DeleteBotVersionCommandOutput extends DeleteBotVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific version of a bot. To delete all version of a bot,
 *          use the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBot.html">DeleteBot</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class DeleteBotVersionCommand extends $Command<
  DeleteBotVersionCommandInput,
  DeleteBotVersionCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBotVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteBotVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBotVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBotVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBotVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBotVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBotVersionCommandOutput> {
    return deserializeAws_restJson1DeleteBotVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
