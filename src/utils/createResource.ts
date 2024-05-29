type Status = "pending" | "error" | "success";

export function createResource<TData>(asyncFunction: Promise<TData>) {
    let status: Status = 'pending';
    let result: TData;
    
    asyncFunction.then(res => {
        result = res;
        status = "success";
    });
    
    asyncFunction.catch(() => {
        status = "error";
    });
    
    return {
        read() {
            if (status === 'pending') throw asyncFunction;
            if (status === 'error') throw result;
            if (status === 'success') return result;
        }
    };
}