import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { GlobalSignOutRequest, GlobalSignOutResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GlobalSignOutCommand,
  serializeAws_json1_1GlobalSignOutCommand,
} from "../protocols/Aws_json1_1";

export interface GlobalSignOutCommandInput extends GlobalSignOutRequest {}
export interface GlobalSignOutCommandOutput extends GlobalSignOutResponse, __MetadataBearer {}

/**
 * <p>Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and ID tokens remain valid until their expiry. Access and Id tokens expire
 *             one hour after they're issued.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link GlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class GlobalSignOutCommand extends $Command<
  GlobalSignOutCommandInput,
  GlobalSignOutCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GlobalSignOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GlobalSignOutCommandInput, GlobalSignOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GlobalSignOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GlobalSignOutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GlobalSignOutResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GlobalSignOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GlobalSignOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GlobalSignOutCommandOutput> {
    return deserializeAws_json1_1GlobalSignOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
