import { useEffect, useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const manipulationSetter = (val) => {
    setCounter(val + 2);
  };

  return { counter, setCounter: manipulationSetter };
};

export const useFetcher = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const getter = () => {
    // axios.get
    // authorization / authentication = token
    // token - localStorage, sessionStorage, cookies
    //   token - state management (global) => Redux, Zustand, useReducer
  };

  const setter = (body) => {
    // axios.post
  };

  const authenticate = () => {
    // axios.post
    // get - token
    // save to state management (Redux, Zustand, useReducer)
    // token bisa digunakan dimana saja
  }

  return { data, getter, setter };
};


// ====================================================== useReducer

// reducer => function => 2 parameters (state = {}, action)
// contain only switch-case conditional
//        (action.type === "AUTHENTICATION") ~ function Set Token
//        (action.type === "RESET") ~ function Reset state
//        (action.type === "ADD") ~ function Set state with value 'action.payload'


// ====================================================== PSEUDOCODE

// initiate project  - React JS
// install dependencies (axios, etc)
// setup states (state management)
//      - custom hooks = useFetcher, useCounter
// ui interfaces (https://blablabla.com)
// functionallity creation (pages)
// testing creation (features)
// deployment
//      - using Github pages/aws

// GIT
// Promise Async
// Component
// Component Composition
// Hooks (useState, useEffect, etc)
// UI Framework
// Routing
// State Management (Redux, Zustand)
// Authentication
// Deployment
