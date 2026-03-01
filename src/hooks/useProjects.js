import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) setError(error);
      else setProjects(data);
      setLoading(false);
    }
    fetch();
  }, []);

  return { projects, loading, error };
}