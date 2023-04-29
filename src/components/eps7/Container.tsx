import React from 'react';

type ContainerProps = { styles: React.CSSProperties }

const Container = (props: ContainerProps) => {
    return (
        <div>
            <p
                //  style={{ border: '1px solid black', padding: '1rem' }}
                style={props.styles}
            >
                Text Goes Here
            </p>
        </div>
    )
}

export default Container