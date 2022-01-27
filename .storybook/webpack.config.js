module.exports = ({ config }) => {
    const rules = config.module.rules;

    // modify storybook's file-loader rule to avoid conflicts with your inline svg
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: "babel-loader"
            },
            {
                loader: "react-svg-loader",
                options: {
                    jsx: true // true outputs JSX tags
                }
            }
        ]
    })

return config;
};
