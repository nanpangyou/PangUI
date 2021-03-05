//  导出该文件夹下的所有svg文件（typescript中写require.context 报错，需要安装@types/webpack-env）
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
try {
  const all = importAll(require.context("./", true, /\.svg$/));
  module.exports = all;
} catch (err) {
  // console.log(err);
}
