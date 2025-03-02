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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { GetExtensionVersionRequest, GetExtensionVersionResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetExtensionVersionCommand,
  serializeAws_restJson1GetExtensionVersionCommand,
} from "../protocols/Aws_restJson1";

export interface GetExtensionVersionCommandInput extends GetExtensionVersionRequest {}
export interface GetExtensionVersionCommandOutput extends GetExtensionVersionResult, __MetadataBearer {}

/**
 * <p>Gets details about a specified extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetExtensionVersionCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetExtensionVersionCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new GetExtensionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExtensionVersionCommandInput} for command's `input` shape.
 * @see {@link GetExtensionVersionCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class GetExtensionVersionCommand extends $Command<
  GetExtensionVersionCommandInput,
  GetExtensionVersionCommandOutput,
  GameSparksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExtensionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExtensionVersionCommandInput, GetExtensionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetExtensionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExtensionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExtensionVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExtensionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExtensionVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExtensionVersionCommandOutput> {
    return deserializeAws_restJson1GetExtensionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
