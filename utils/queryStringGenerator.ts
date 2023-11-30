export const GenerateQueryString = (
    paramQuery: any,
    query: {
        key: string;
        value: string;
    },
) => {
    let queryString = '';

    // check if query key is price or rating
    if (query.key === 'price') {
        delete paramQuery[query.key];
    }

    // check if query is already exist
    // if exist then remove it from query
    // else add it to query
    if (paramQuery[query.key]) {
        // check if query key is price or rating
        // if yes then remove

        let str =
            paramQuery[query.key].replace(/\%2C/g, ',') ||
            paramQuery[query.key];
        let qArray = str.split(',') || str;
        if (qArray.indexOf(query.value) > -1) {
            qArray.splice(qArray.indexOf(query.value), 1);
        } else {
            qArray.push(query.value);
        }

        if (qArray.length > 0) {
            paramQuery[query.key] = qArray.join('%2C');
        } else {
            delete paramQuery[query.key];
        }
    } else {
        paramQuery[query.key] = query.value;
    }

    // generate query string
    for (let key in paramQuery) {
        if (paramQuery[key]) {
            const value =
                paramQuery[key].replace(/\,/g, '%2C') || paramQuery[key];
            queryString += `${key}=${value}&`;
        }
    }

    return queryString.replace(/&$/, '');
};
