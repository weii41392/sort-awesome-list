import { mergeObject, filterFalsy } from './utils';

export const defaults = {
  token: null,
  urlPatterns: {
    githubRepo: true,
    githubRepoPage: true,
    githubRepoIncludeSub: true
  }
};

export const labels = {
  githubRepo: 'GitHub repository',
  githubRepoPage: 'GitHub page',
  githubRepoIncludeSub: 'GitHub repository subpages'
};

export function makeConfigs(configs) {
  let innerConfigs = { ...defaults };
  if (configs) {
    innerConfigs = mergeObject(innerConfigs, configs);
  } else {
    innerConfigs = { ...innerConfigs };
  }
  innerConfigs.urlPatterns = filterFalsy(innerConfigs.urlPatterns);
  return innerConfigs;
}
