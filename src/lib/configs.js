import { mergeObject, filterFalsy } from './utils';

const defaults = {
  token: null,
  urlPatterns: {
    githubRepo: true,
    githubRepoPage: true,
    githubRepoIncludeSub: true
  }
};

export default function makeConfigs(configs) {
  let innerConfigs = { ...defaults };
  if (configs) {
    innerConfigs = mergeObject(innerConfigs, configs);
  } else {
    innerConfigs = { ...innerConfigs };
  }
  innerConfigs.urlPatterns = filterFalsy(innerConfigs.urlPatterns);
  return innerConfigs;
}
