import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Onboarding from "./Onboarding"; // Import Onboarding component

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onboardingShown = localStorage.getItem("onboardingShown");
    //if (onboardingShown === "true") {
    //navigate("/home", { replace: true });
    //}
  }, [navigate]);

  // If onboardingShown is not true, render Onboarding component
  // The useEffect will redirect if it becomes true (e.g. after Onboarding completion)
  if (localStorage.getItem("onboardingShown") === "true") {
    // This is a fallback, navigation should happen in useEffect
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Redirecionando para Home...</p>
      </div>
    );
  }

  return <Onboarding />;
};

export default Index;
