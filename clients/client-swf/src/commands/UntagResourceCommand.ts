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

import { UntagResourceInput } from "../models/models_0";
import {
  deserializeAws_json1_0UntagResourceCommand,
  serializeAws_json1_0UntagResourceCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

export interface UntagResourceCommandInput extends UntagResourceInput {}
export interface UntagResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove a tag from a Amazon SWF domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, UntagResourceCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, UntagResourceCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 */
export class UntagResourceCommand extends $Command<
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagResourceCommandInput, UntagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "UntagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UntagResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagResourceCommandOutput> {
    return deserializeAws_json1_0UntagResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
