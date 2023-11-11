export const isNil = (param: any) => {
    if (param === null || param === undefined) {
        return true;
    }
    return false;
}

export const isString = (param: any) => {
    if (typeof(param) === 'string') {
        return true
    }
    return false
}