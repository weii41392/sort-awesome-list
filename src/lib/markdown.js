import { remark } from 'remark';
import { removePosition } from 'unist-util-remove-position';

export function parse(text) {
  const tree = remark.parse(text);
  removePosition(tree, true);
  return tree;
}

export function stringify(tree) {
  return remark.stringify(tree);
}

export function insertStarCode(target, numStars) {
  const tree = parse(`**\`${numStars}\`** -`);
  const newChildren = tree.children[0].children;
  newChildren[1].value = ' ';
  target.children.unshift(...newChildren);
}

function visitNode(tree) {
  if (!this.test || tree.type === this.test) {
    this.visitor(tree);
  }
  tree.children?.forEach(this.visitNode);
}

export function visit(tree, test, visitor) {
  // caching if applicable
  if (test !== visit.test || visitor !== visit.visitor) {
    // overloadding (tree, visitor)
    if (typeof test === 'function') {
      visitor = test;
      test = null;
    }
    visit.test = test;
    visit.visitor = visitor;
    visit.visitNode = visitNode.bind(visit);
    visit.walker = remark().use(() => visit.visitNode);
  }
  visit.walker.runSync(tree);
}
