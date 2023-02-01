import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import Box from '@mui/material/Box';
import 'github-markdown-css/github-markdown-light.css';

const externalLinkPlugin = [
  rehypeExternalLinks,
  {
    target: '_blank',
    rel: ['noopener', 'noreferrer']
  }
];

function overflowAutoPre(props) {
  return <pre {...props} style={{ overflow: 'auto' }} />;
}

function CodePreview({ source }) {
  return (
    <Box className="markdown-body" p={2}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSanitize,
          externalLinkPlugin,
          rehypeSlug
        ]}
        components={{ pre: overflowAutoPre }}
      >
        {source}
      </ReactMarkdown>
    </Box>
  );
}

CodePreview.propTypes = {
  source: PropTypes.string.isRequired
};

export default CodePreview;
