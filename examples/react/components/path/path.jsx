const React = require('react');

const { usePath } = require('@dryfeld/react/components');

const Path = () => {
    const path = usePath();
    return <>{path.get('/some-path')}</>;
};

module.exports = Path;
