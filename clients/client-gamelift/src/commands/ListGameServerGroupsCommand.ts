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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListGameServerGroupsInput, ListGameServerGroupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListGameServerGroupsCommand,
  serializeAws_json1_1ListGameServerGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface ListGameServerGroupsCommandInput extends ListGameServerGroupsInput {}
export interface ListGameServerGroupsCommandOutput extends ListGameServerGroupsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on all game servers groups that exist in the current Amazon Web Services
 *             account for the selected Region. Use the pagination parameters to retrieve results in a
 *             set of sequential segments. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameServerGroup</a> |
 *                     <a>ListGameServerGroups</a> |
 *                     <a>DescribeGameServerGroup</a> |
 *                     <a>UpdateGameServerGroup</a> |
 *                     <a>DeleteGameServerGroup</a> |
 *                     <a>ResumeGameServerGroup</a> |
 *                     <a>SuspendGameServerGroup</a> |
 *                     <a>DescribeGameServerInstances</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListGameServerGroupsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListGameServerGroupsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListGameServerGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGameServerGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGameServerGroupsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ListGameServerGroupsCommand extends $Command<
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGameServerGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGameServerGroupsCommandInput, ListGameServerGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListGameServerGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGameServerGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGameServerGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGameServerGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGameServerGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGameServerGroupsCommandOutput> {
    return deserializeAws_json1_1ListGameServerGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
