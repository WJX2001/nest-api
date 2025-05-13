import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthResolver } from './auth.resolver';
import { AuthResolver } from './auth.resolver';
import { PasswordService } from './password.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/common/configs/config.interface';
import { JwtStrategy } from './jwt.strategy';
import { GqlAuthGuard } from './gql-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig?.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    PasswordService,
    AuthResolver,
    JwtStrategy,
    GqlAuthGuard,
  ],
  exports: [GqlAuthGuard],
})
export class AuthModule {}
