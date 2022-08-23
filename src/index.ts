/**
 * 
 * @param name REACT_APP_{ENV_NAME}
 * @returns string or '' if not found
 */
const env = (name: string): string => {
    return process.env?.[`REACT_APP_${name}`] ?? '';
};

export default env;
