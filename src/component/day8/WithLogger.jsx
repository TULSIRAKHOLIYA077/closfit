
const WithLogger = (WrappedComponent) => {
  return (props) => {
    return (
    <WrappedComponent {...props}>

        <p className="text-fuchsia-950 mt-2">
          📣 This component was wrapped using HOC
        </p>
    </WrappedComponent>    
    );
  };
};

export default WithLogger;