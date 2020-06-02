// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
    //   .set('utils', resolve('src/utils'))
    //   .set('modules', resolve('src/modules'))
      .set('components', resolve('src/components'));
    config.resolve.symlinks(true);
    if (isProduction) {
      // 删除预加载
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all',
      });
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // path.resolve(__dirname, './src/style/mixins/*.scss'),
        // path.resolve(__dirname, './src/style/theme/mixins.scss'),
        // path.resolve(__dirname, './src/style/theme/function.scss'),
        // path.resolve(__dirname, './src/style/common/var.scss'),
      ],
    },
  },
};
