import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

@Module({
    controllers: [ApiController],
    imports: [
        HttpModule.registerAsync({
            useFactory: async () => {
                const { access_token = '', base_domain = '' } = await fetch(
                    'https://test.gnzs.ru/oauth/get-token.php',
                    {
                        headers: { 'X-Client-Id': '31550986' }
                    }
                )
                    .then((res) => res.json())
                    .catch((r) => {
                        throw new Error(r);
                    });
                return { baseURL: `https://${base_domain}`, headers: { Authorization: `Bearer ${access_token}` } };
            }
        })
    ]
})
export class ApiModule {}
