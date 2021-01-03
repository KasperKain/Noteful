import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: null });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
