export interface Entity {
    text: string;
    value: string;
}

export interface CreatedEntity {
    id: number;
    value: string;
}

export interface Entities {
    [entityType: string]: {
        text: string;
        createdEntities: CreatedEntity[];
    };
}

export interface BaseResponse<T> {
    statusCode: number;
    response: T;
    error: unknown;
}
