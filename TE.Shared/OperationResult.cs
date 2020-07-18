namespace TE.Shared
{
    public class OperationResult{
        public OperationStatus Status { get; }
        public bool IsSuccess => Status == OperationStatus.Success;

        public OperationResult(OperationStatus status)
        {
            Status = status;
        }

        public OperationResult()
        {
            Status = OperationStatus.Success;
        }
    }

    public class OperationResult<T> :OperationResult
    {
        public T Data { get; set; }

        public OperationResult(T data) : base(OperationStatus.Success)
        {
            Data = data;
        }

        public OperationResult(OperationStatus status): base(status)
        {

        }

    }

    public enum OperationStatus
    {
        Success, GeneralError, NotFound
    }
}
