export interface OperationResult<T> {
    status: OperationStatus;
    isSuccess: boolean;
    data: T;
    operationStatus: number;
}

export enum OperationStatus
{
    Success, GeneralError, NotFound
}
