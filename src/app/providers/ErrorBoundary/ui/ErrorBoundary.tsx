import React, {ErrorInfo, ReactNode, Suspense} from "react";
import {PageError} from "widgets/PageError/ui/PageError";

interface IErrorBoundary {
    children: ReactNode;
}
interface IErrorBoundaryState {
    hasError: boolean;
}


class ErrorBoundary extends React.Component<IErrorBoundary, IErrorBoundaryState> {
    constructor(props: IErrorBoundary) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return <Suspense fallback={""}><PageError /></Suspense>;
        }

        return children;
    }
}
export default ErrorBoundary;
