type StatusProps = {
    // Union of string literal
    // https://stackoverflow.com/questions/61047551/typescript-union-of-string-and-string-literals
    // This will give error if status is not in one of these
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...';
    } else if (props.status === 'success') {
        message = 'Data fetched successfully';
    } else if (props.status === 'error') {
        message = 'Error fetching data';
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}