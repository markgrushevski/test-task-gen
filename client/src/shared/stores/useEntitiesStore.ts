import { Fetch } from '@shared/lib';
import type { BaseResponse, CreatedEntity, Entities, Entity } from '@shared/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEntitiesStore = defineStore('entities', () => {
    const entities = ref<Entities>({
        leads: { text: 'Сделка', createdEntities: [] },
        contacts: { text: 'Контакт', createdEntities: [] },
        companies: { text: 'Компания', createdEntities: [] }
    });

    const selectedEntity = ref<Entity | null>(null);

    const loading = ref(false);

    const errors = ref<unknown[]>([]);

    async function createEntity() {
        const route = selectedEntity.value?.value;
        const name = selectedEntity.value?.text;

        if (!route) return;

        loading.value = true;

        const timeStamp = new Date().toLocaleString('ru-RU', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour12: false,
            timeZone: 'UTC'
        });

        await Fetch.post<BaseResponse<string>>(`/api/${route}`, [{ name: `${name}: ${timeStamp}` }])
            .then((response) => {
                const err = response.data.error;

                if (err) {
                    errors.value.push(err);
                }
            })
            .catch((err) => {
                console.error(err);
            });

        loading.value = false;

        getCreatedEntities();
    }

    function getCreatedEntities() {
        for (const route in entities.value) {
            Fetch.get<BaseResponse<CreatedEntity[]>>(`/api/${route}`)
                .then((response) => {
                    const err = response.data.error;
                    const res = response.data.response;

                    if (err) {
                        errors.value.push(err);
                    } else {
                        entities.value[route].createdEntities = res;
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }

    return {
        entities,
        selectedEntity,
        loading,
        createEntity,
        getCreatedEntities
    };
});
