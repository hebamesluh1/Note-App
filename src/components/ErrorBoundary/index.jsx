import React from "react";
import Error from './Error';
export default class ErrorBoundary extends React.Component {
        constructor(props) {
        super(props);
        this.state = { hasError: false };
        }
        static getDerivedStateFromError(error) {
        return { hasError: true };
        }
    
        render() {
        if (this.state.hasError) {
            return <Error/>
        }
        return this.props.children; 
        }
    }