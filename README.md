# React 19 useEffect Cleanup Function Issue

This repository demonstrates a problem where the cleanup function within a `useEffect` hook in React 19 doesn't seem to be called when the component unmounts.  This issue is inconsistent and might only occur under certain conditions, such as rapid component updates or specific component lifecycles.