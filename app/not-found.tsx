"use client";
import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState showReset title="Oops!" subTitle="We can't seem to find the page you're looking for." />;
};

export default ErrorState;
