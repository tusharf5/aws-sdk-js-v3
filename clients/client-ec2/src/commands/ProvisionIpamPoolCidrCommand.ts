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
import { ProvisionIpamPoolCidrRequest, ProvisionIpamPoolCidrResult } from "../models/models_5";
import {
  deserializeAws_ec2ProvisionIpamPoolCidrCommand,
  serializeAws_ec2ProvisionIpamPoolCidrCommand,
} from "../protocols/Aws_ec2";

export interface ProvisionIpamPoolCidrCommandInput extends ProvisionIpamPoolCidrRequest {}
export interface ProvisionIpamPoolCidrCommandOutput extends ProvisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it.</p>
 *          <p>For more information, see <a href="/vpc/latest/ipam/prov-cidr-ipam.html">Provision CIDRs to pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ProvisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ProvisionIpamPoolCidrCommand extends $Command<
  ProvisionIpamPoolCidrCommandInput,
  ProvisionIpamPoolCidrCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ProvisionIpamPoolCidrCommandInput) {
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
  ): Handler<ProvisionIpamPoolCidrCommandInput, ProvisionIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionIpamPoolCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProvisionIpamPoolCidrResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ProvisionIpamPoolCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionIpamPoolCidrCommandOutput> {
    return deserializeAws_ec2ProvisionIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
