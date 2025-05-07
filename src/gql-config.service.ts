import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphqlConfig } from './common/configs/config.interface';
import { Injectable } from '@nestjs/common';
@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    console.log(11111)
    console.log(this.configService,'graphqlConfig');
    const graphqlConfig = this.configService.get<GraphqlConfig>('graphql');
    console.log(graphqlConfig,'graphqlConfig');
    console.log(11111)
    return {
      autoSchemaFile:
        graphqlConfig?.schemaDestination || './src/schema.graphql',
      sortSchema: graphqlConfig?.sortSchema,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      // subscription
      installSubscriptionHandlers: true,
      includeStacktraceInErrorResponses: graphqlConfig?.debug,
      playground: graphqlConfig?.playgroundEnabled,
      context: ({ req }) => ({ req }),
    };
  }
}
