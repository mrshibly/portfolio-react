import { useState, useEffect } from 'react';

export const useGithubStats = (username = 'mrshibly') => {
  const [stats, setStats] = useState({
    publicRepos: 14,
    followers: 12,
    totalStars: 18,
    loading: false,
    updatedAt: new Date().toLocaleDateString()
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) return;
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        let starCount = 18;
        if (reposRes.ok) {
          const repos = await reposRes.json();
          if (Array.isArray(repos)) {
            starCount = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          }
        }

        if (isMounted) {
          setStats({
            publicRepos: userData.public_repos || 14,
            followers: userData.followers || 12,
            totalStars: starCount || 18,
            loading: false,
            updatedAt: new Date().toLocaleDateString()
          });
        }
      } catch (err) {
        // Silently fallback to curated defaults
      }
    };

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return stats;
};
