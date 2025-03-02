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

import { AuthorizeDBSecurityGroupIngressMessage, AuthorizeDBSecurityGroupIngressResult } from "../models/models_0";
import {
  deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeDBSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface AuthorizeDBSecurityGroupIngressCommandInput extends AuthorizeDBSecurityGroupIngressMessage {}
export interface AuthorizeDBSecurityGroupIngressCommandOutput
  extends AuthorizeDBSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security
 *           groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC
 *           instances. Second, IP ranges are available if the application accessing your database is running on the internet.
 *           Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId
 *           and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p>
 *         <note>
 *             <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in
 *              another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p>
 *         </note>
 *         <p>For an overview of CIDR ranges, go to the
 *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AuthorizeDBSecurityGroupIngressCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AuthorizeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AuthorizeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class AuthorizeDBSecurityGroupIngressCommand extends $Command<
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeDBSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeDBSecurityGroupIngressCommandInput, AuthorizeDBSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AuthorizeDBSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AuthorizeDBSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeDBSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
