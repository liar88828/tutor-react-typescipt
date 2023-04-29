type StatusProps = {
    // status: string,
    status: 'loading' | 'success' | 'error'// union
}
export const Status = (props: StatusProps) => {
    let message

    if (props.status === 'loading') {
        message = 'Loading....'
    }
    else if (props.status === 'success') {
        message = 'Data Fetch Success'
    } else {
        message = 'Error Fetch Data'

    }
    return (
        <div>
            {/* <h2>Loading....</h2>
            <h2>Data Fetch Success</h2>
            <h2>Error Fetch Data</h2> */}
            <h2>Status - {message}</h2>
        </div>
    )
}
