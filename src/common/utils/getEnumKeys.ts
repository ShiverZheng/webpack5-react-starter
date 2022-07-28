const getEnumKeys = <T>(enumeratedValue: T) => (Object.keys(enumeratedValue) as (keyof typeof enumeratedValue)[]).filter(
    (value) => typeof value === 'string' && Number.isNaN(Number(value)),
)
export default getEnumKeys
