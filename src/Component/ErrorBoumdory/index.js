import React from 'react';
import logo from './logo.svg';
class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        return this.state.hasError
            ? <h1>{logo} Something went wrong.</h1>
            : this.props.children;
    }
}

export default ErrorBoundary;