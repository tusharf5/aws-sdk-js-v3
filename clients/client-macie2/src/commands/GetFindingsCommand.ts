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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingsRequest, GetFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFindingsCommand,
  serializeAws_restJson1GetFindingsCommand,
} from "../protocols/Aws_restJson1";

export interface GetFindingsCommandInput extends GetFindingsRequest {}
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of one or more findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetFindingsCommand extends $Command<
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsCommandInput, GetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsCommandOutput> {
    return deserializeAws_restJson1GetFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
