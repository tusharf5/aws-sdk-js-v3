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

import { GenerateEmbedUrlForAnonymousUserRequest, GenerateEmbedUrlForAnonymousUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand,
  serializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface GenerateEmbedUrlForAnonymousUserCommandInput extends GenerateEmbedUrlForAnonymousUserRequest {}
export interface GenerateEmbedUrlForAnonymousUserCommandOutput
  extends GenerateEmbedUrlForAnonymousUserResponse,
    __MetadataBearer {}

/**
 * <p>Generates an embed URL that you can use to embed an Amazon QuickSight dashboard in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions.</p>
 *         <p>The following rules apply to the generated URL:</p>
 *         <ul>
 *             <li>
 *                 <p>It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.</p>
 *             </li>
 *             <li>
 *                 <p>The URL validity period should not be confused with the actual session lifetime
 *         that can be customized using the <code>
 *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html#QS-GenerateEmbedUrlForAnonymousUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
 *                   </code> parameter.</p>
 *                 <p>The resulting user session is valid for 15 minutes (default) to 10 hours (maximum).</p>
 *             </li>
 *             <li>
 *                 <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 *         <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GenerateEmbedUrlForAnonymousUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class GenerateEmbedUrlForAnonymousUserCommand extends $Command<
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateEmbedUrlForAnonymousUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateEmbedUrlForAnonymousUserCommandInput, GenerateEmbedUrlForAnonymousUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "GenerateEmbedUrlForAnonymousUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateEmbedUrlForAnonymousUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateEmbedUrlForAnonymousUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateEmbedUrlForAnonymousUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput> {
    return deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
