

const Loading = (WrappedComponent) => {
    ({isLoading,...otherProps}) => {
        return(
           props.Loading ? <WrappedComponent {...otherProps} /> : <p>Loading</p>
        )
    }
};

export default Loading;