//extension permettant de trouvé le chemin absolue (c:/user...)
const path = require('path');
//on charge webpack
const webpack = require('webpack');
const dev = process.env.NODE_ENV == 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log('dev', dev);
let cssLoaders = [
    {loader: 'css-loader', options: {importLoaders: 1, minimize: !dev}}
];

if (!dev) {
    cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            plugins: (loader) => [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie > 8']
                })
            ]
        }
    })
}

let config = {
//indique le chemin d'entré cad la où se trouve la source du code
    entry: './src/client/index.js',
    watch : dev,
    //sortie des fichier cad la où le code va être compiler
    output: {
        //chemin de sortie menant vers un dossier
        path: path.resolve(__dirname, './assets'),
        //chemin de sortie menant vers le fichier
        filename: 'main.js',
        publicPath: "/assets/"
    },
    devtool: dev ? "cheap-module-eval-source-map" : "source-map",
    //le module en question qui pour les fichier js et jsx fais appel à babel loader cf .babelrc
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'babel-loader']
        },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: cssLoaders
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [...cssLoaders, 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                //permet de détecter à l'interieur de react la variable d'envirionement ici dev ou prod
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev
        })
    ]
};

//On test la variable d'envrionnement et on ne charge le pluggin uniquement si la conditio est vérifié
if (!dev) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    );
    //permet d'obtenir un fichier plus léger'
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    )
}
//Dans la variable env = dev on charge react-hot-loader patch
if (dev) {
    config.plugins.push(new webpack.NamedModulesPlugin());
    config.entry = ['react-hot-loader/patch', config.entry]
}

//on exporte le tout
module.exports = config;