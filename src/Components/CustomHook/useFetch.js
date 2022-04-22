import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState();
  const [patients, setPatients] = useState([]);

  const getPatients = async () => {
    setLoading(true);
    const res = await fetch(url);
    const patients = await res.json();
    setPatients(patients);
    setLoading(false);
  };
  useEffect(() => {
    getPatients();
  }, [url]);
  return { loading, patients };
};
