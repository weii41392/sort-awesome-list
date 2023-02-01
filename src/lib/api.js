import base64 from 'base-64';
import utf8 from 'utf8';

function getOptions(token) {
  if (token) {
    return {
      headers: {
        Authorization: `bearer ${token}`
      }
    };
  }
  return null;
}

export async function fetchReadme(owner, repo, token) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
    const response = await fetch(url, getOptions(token));
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return utf8.decode(base64.decode(data.content));
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    if (error.status === 403) {
      throw new Error('Rate limit exceeded. Please login to continue.');
    } else if (error.status === 404) {
      throw new Error(`No README file found in repository ${owner}/${repo}.`);
    }
    throw new Error('Failed to fetch README file.');
  }
}

export async function fetchGithubStars(owner, repo, token) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await fetch(url, getOptions(token));
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    if (error.status === 403) {
      throw new Error('Rate limit exceeded. Please login to continue.');
    } else if (error.status === 404) {
      throw new Error(`Repository ${owner}/${repo} not found.`);
    }
    throw new Error('Failed to fetch repository stars.');
  }
}
