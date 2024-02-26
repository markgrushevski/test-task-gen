import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBaseDto } from './dto/create-base.dto';

@Controller('api')
export class ApiController {
    constructor(private readonly httpService: HttpService) {}

    @Post(':route')
    async create(@Param('route') routeName: string, @Body() createBaseDtos: CreateBaseDto[]) {
        let statusCode = null;
        let response = null;
        let error = null;

        await this.httpService.axiosRef
            .post(`/api/v4/${routeName}`, JSON.stringify(createBaseDtos), {
                headers: { 'Content-Type': 'application/json' }
            })
            .then((res) => {
                statusCode = res.status;

                response = 'Created successfully.';
            })
            .catch((e) => {
                error = e;
            });

        return { statusCode, response, error };
    }

    @Get(':route')
    async findAll(@Param('route') routeName: string) {
        let statusCode = null;
        let response = null;
        let error = null;

        await this.httpService.axiosRef
            .get(`/api/v4/${routeName}`)
            .then((res) => {
                statusCode = res.status;

                const entityList: { id: number; name: string; created_at: number }[] | null =
                    res.data?._embedded?.[routeName] || null;

                if (entityList) {
                    response =
                        entityList
                            .sort((a, b) => b.created_at - a.created_at)
                            .map((entity) => ({ id: entity.id, value: entity.name })) || null;
                }
            })
            .catch((e) => {
                error = e;
            });

        return { statusCode, response, error };
    }
}
