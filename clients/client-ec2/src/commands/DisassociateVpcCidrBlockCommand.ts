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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/models_4";
import {
  deserializeAws_ec2DisassociateVpcCidrBlockCommand,
  serializeAws_ec2DisassociateVpcCidrBlockCommand,
} from "../protocols/Aws_ec2";

export interface DisassociateVpcCidrBlockCommandInput extends DisassociateVpcCidrBlockRequest {}
export interface DisassociateVpcCidrBlockCommandOutput extends DisassociateVpcCidrBlockResult, __MetadataBearer {}

/**
 * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
 *             specify its association ID. You can get the association ID by using
 *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
 *             are associated with the CIDR block before you can disassociate it. </p>
 * 		       <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
 * 			primary CIDR block).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisassociateVpcCidrBlockCommand extends $Command<
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateVpcCidrBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateVpcCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateVpcCidrBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateVpcCidrBlockResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateVpcCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateVpcCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateVpcCidrBlockCommandOutput> {
    return deserializeAws_ec2DisassociateVpcCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
