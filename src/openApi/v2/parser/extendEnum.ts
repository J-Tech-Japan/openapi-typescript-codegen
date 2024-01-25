import type { Enum } from '../../../client/interfaces/Enum';
import { isString } from '../../../utils/isString';
import type { WithEnumExtension } from '../interfaces/Extensions/WithEnumExtension';

/**
 * Extend the enum with the x-enum properties. This adds the capability
 * to use names and descriptions inside the generated enums.
 * @param enumerators
 * @param definition
 */
export const extendEnum = (enumerators: Enum[], definition: WithEnumExtension): Enum[] => {
    const values = definition['x-enum-values'];
    const names = definition['x-enum-varnames']?.filter(isString);
    const titles = definition['x-enum-titles']?.filter(isString);
    const descriptions = definition['x-enum-descriptions']?.filter(isString);

    return enumerators.map((enumerator, index) => ({
        name: names?.[index] || enumerator.name,
        description: descriptions?.[index] || enumerator.description,
        value: values?.[index] || enumerator.value,
        title: titles?.[index] || enumerator.title,
        type: enumerator.type,
    }));
};
