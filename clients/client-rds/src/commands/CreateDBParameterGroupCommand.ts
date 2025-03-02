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

import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBParameterGroupCommand,
  serializeAws_queryCreateDBParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBParameterGroupCommandInput extends CreateDBParameterGroupMessage {}
export interface CreateDBParameterGroupCommandOutput extends CreateDBParameterGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB parameter group.</p>
 *         <p>A DB parameter group is initially created with the default parameters for the
 *             database engine used by the DB instance. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to
 *             associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate
 *             a new DB parameter group with a running DB instance, you need to reboot the DB
 *             instance without failover for the new DB parameter group and associated settings to take effect.</p>
 *         <p>This command doesn't apply to RDS Custom.</p>
 *         <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes
 *                 before creating your first DB instance that uses that DB parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB instance. This is especially important for parameters
 *                 that are critical when creating the default database for a DB instance, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <i>DescribeDBParameters</i> command to verify
 *                 that your DB parameter group has been created or modified.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBParameterGroupCommand extends $Command<
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBParameterGroupCommandInput) {
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
  ): Handler<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBParameterGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBParameterGroupCommandOutput> {
    return deserializeAws_queryCreateDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
