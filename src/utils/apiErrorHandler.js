class apiError extends Error{
    constructor(
        messages,
        statusCode,
        stack="",
        errors=[],
    ){
        super(messages)
        this.statusCode=statusCode;
        this.stack=stack;
        this.error=errors;
        this.success=false;
    }
}
export default apiError;