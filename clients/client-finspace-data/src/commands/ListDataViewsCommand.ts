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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListDataViewsRequest, ListDataViewsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDataViewsCommand,
  serializeAws_restJson1ListDataViewsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDataViewsCommandInput extends ListDataViewsRequest {}
export interface ListDataViewsCommandOutput extends ListDataViewsResponse, __MetadataBearer {}

/**
 * <p>Lists all available Dataviews for a Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListDataViewsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListDataViewsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new ListDataViewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataViewsCommandInput} for command's `input` shape.
 * @see {@link ListDataViewsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class ListDataViewsCommand extends $Command<
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
  FinspaceDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataViewsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataViewsCommandInput, ListDataViewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListDataViewsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataViewsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataViewsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataViewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataViewsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataViewsCommandOutput> {
    return deserializeAws_restJson1ListDataViewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
