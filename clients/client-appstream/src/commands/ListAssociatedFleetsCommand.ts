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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociatedFleetsCommand,
  serializeAws_json1_1ListAssociatedFleetsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAssociatedFleetsCommandInput extends ListAssociatedFleetsRequest {}
export interface ListAssociatedFleetsCommandOutput extends ListAssociatedFleetsResult, __MetadataBearer {}

/**
 * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ListAssociatedFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedFleetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class ListAssociatedFleetsCommand extends $Command<
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedFleetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedFleetsCommandInput, ListAssociatedFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "ListAssociatedFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedFleetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedFleetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssociatedFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedFleetsCommandOutput> {
    return deserializeAws_json1_1ListAssociatedFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
