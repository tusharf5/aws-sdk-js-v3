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

import { SimpleScalarPropertiesInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1SimpleScalarPropertiesCommand,
  serializeAws_restJson1SimpleScalarPropertiesCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface SimpleScalarPropertiesCommandInput extends SimpleScalarPropertiesInputOutput {}
export interface SimpleScalarPropertiesCommandOutput extends SimpleScalarPropertiesInputOutput, __MetadataBearer {}

export class SimpleScalarPropertiesCommand extends $Command<
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimpleScalarPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimpleScalarPropertiesCommandInput, SimpleScalarPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "SimpleScalarPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SimpleScalarPropertiesInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: SimpleScalarPropertiesInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimpleScalarPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SimpleScalarPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleScalarPropertiesCommandOutput> {
    return deserializeAws_restJson1SimpleScalarPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
