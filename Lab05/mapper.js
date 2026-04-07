function asyncMapCallback(array, asyncMapper, onComplete) {
    if (array.length === 0) {
       return onComplete(null, []);
    }
    const result = new Array(array.length);
    let completed = 0;
    let hasError = false;

    for (let i = 0; i < array.length; i++) {
        asyncMapper(array[i], (err, mappedValue) => {
            if (hasError) return;
            if (err) {
                hasError = true;
                return onComplete(err, null);
            }
            result[i] = mappedValue;
            completed++;
            if (completed === array.length) {
                onComplete(null, result);
            }
        });
    }
}

/*
function asyncMapPromise(array, asyncMapper) {
    return Promise.all(array.map(item => asyncMapper(item))); 
}
*/

