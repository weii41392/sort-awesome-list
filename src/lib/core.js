import { fetchGithubStars } from './api';
import { insertStarCode, visit } from './markdown';
import { patterns } from './constants';
import { rejectionsFromPromises } from './utils';

function matchRepo(url, urlPatterns) {
  const validPatterns = Object.keys(urlPatterns);
  const matchedPattern = validPatterns.find((pattern) =>
    Boolean(url.match(patterns[pattern]))
  );
  if (matchedPattern) {
    const match = url.match(patterns[matchedPattern]);
    return match.slice(1);
  }
  return null;
}

async function markGithubStarsOnItem(item, configs) {
  async function markGithubStarsOnLink(node) {
    if (node.type !== 'link') {
      return;
    }
    const match = matchRepo(node.url, configs.urlPatterns);
    if (!match) {
      return;
    }
    const numStars = await fetchGithubStars(...match, configs.token);
    if (numStars) {
      item.githubStars = Math.max(item.githubStars || 0, numStars);
    }
  }
  const paragraph = item.children[0];
  const promises = paragraph.children.map(markGithubStarsOnLink);
  const rejections = await rejectionsFromPromises(promises);

  if (item.githubStars != null) {
    insertStarCode(paragraph, item.githubStars);
  }
  if (rejections.length > 0) {
    throw rejections;
  }
}

export default async function markAndSort(tree, configs) {
  async function markAndSortOnList(node) {
    const promises = node.children.map((child) =>
      markGithubStarsOnItem(child, configs)
    );
    const rejections = await rejectionsFromPromises(promises);
    node.children.sort((a, b) => (b.githubStars || 0) - (a.githubStars || 0));
    if (rejections.length > 0) {
      throw rejections;
    }
  }
  const promises = [];
  visit(tree, 'list', (node) => {
    promises.push(markAndSortOnList(node));
  });
  return rejectionsFromPromises(promises);
}
