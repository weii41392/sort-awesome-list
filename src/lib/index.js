import { patterns } from './constants';
import { fetchReadme } from './api';
import { parse, stringify } from './markdown';
import { mergeObject, filterFalsy } from './utils';
import { defaults as defaultConfigs, makeConfigs } from './configs';
import markAndSort from './core';

class Client {
  constructor(configs) {
    this.configs = makeConfigs(configs);
  }

  updateUrlPatterns(urlPatterns) {
    const innerUrlPatterns = mergeObject(
      defaultConfigs.urlPatterns,
      urlPatterns
    );
    this.configs.urlPatterns = filterFalsy(innerUrlPatterns);
  }

  updateToken(token) {
    this.configs.token = token;
  }

  async getReadme(repoLink) {
    const match = repoLink.match(patterns.githubRepoIncludeSub);
    if (!match) {
      throw new Error('Invalid repository link.');
    }
    const [owner, repo] = match.slice(1);
    return fetchReadme(owner, repo, this.configs.token);
  }

  async getSorted(markdown) {
    const tree = parse(markdown);
    const errors = await markAndSort(tree, this.configs);
    return [stringify(tree), errors];
  }
}

export default Client;
